import { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Email submitted:", email);
    };

    return (
        <section className="bg-white rounded-lg p-6 space-y-8">
            <h2 className="text-4xl bg-gradient-to-r from-[#2C418F] to-[#4B70F5] text-transparent bg-clip-text text-center">
                Sign up for New Hovertask Updates, Tasks, and Offers!
            </h2>

            <form
                onSubmit={handleSubmit}
                className="flex max-w-screen-md mx-auto border rounded-full py-1 px-4 pr-2 border-black gap-2 items-center"
            >
                <input
                    type="email"
                    placeholder="Enter your email here"
                    className="flex-1 min-w-0"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button
                    type="submit"
                    className="bg-[#4B70F5] hover:bg-[#2C418F] text-white font-semibold h-full flex justify-center py-2 px-4 rounded-full"
                >
                    Continue
                </button>
            </form>
        </section>
    );
};

export default Newsletter;
