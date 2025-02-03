import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="bg-white  rounded-lg p-6 max-w-lg mx-auto mt-8">
      <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
        Sign up for New Hovertask Updates, Tasks, and Offers!
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input
          type="email"
          placeholder="Enter your email here"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          className="bg-[#4B70F5] hover:bg-[#2C418F] text-white font-semibold py-3 rounded-lg transition"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
