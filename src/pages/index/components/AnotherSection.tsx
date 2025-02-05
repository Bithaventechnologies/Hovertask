const AnotherSection = () => {
    return (
        <section className="max-w-screen-lg mx-auto flex max-lg:flex-col items-center justify-center px-4 pb-28">
            {/* Text Content */}
            <div className="container max-w-lg ">
                <h2 className="text-4xl mb-4 bg-gradient-to-r from-[#2C418F] to-[#4B70F5] text-transparent bg-clip-text">
                    Earn money by helping other people grow
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                    Get paid by helping people grow, no investment or signup fee required.
                </p>
                <ul className="text-gray-800 list-disc list-inside mb-6 space-y-2">
                    <li>Over 1000 daily tasks</li>
                    <li>Instant withdrawals</li>
                    <li>No investment or signup fee required</li>
                </ul>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
                    Create Account
                </button>
            </div>

            {/* Image Section */}
            <div className="lg:block w-1/2 relative w-fit">
                <img
                    src="/assets/images/hand-holding-phone.png"
                    alt="Phone with Social Media Icons"
                    className="w-full object-cover h-full max-w-sm"
                />
                <div className="absolute h-24 w-full -bottom-4 bg-gradient-to-b from-white/10 via-white to-white blur-sm"></div>
            </div>
        </section>
    );
};

export default AnotherSection;
