const JoinUsSection = () => {
    return (
        <section className="relative bg-gradient-to-r from-[#4B70F5] to-[#2C418F] text-white p-10 rounded-full max-md:rounded-xl shadow-lg flex flex-row items-center space-y-6 md:space-y-0 md:space-x-6 max-w-screen-md mx-auto overflow-hidden">
            {/* Image Section */}
            <div className="flex-shrink-0 max-md:hidden -translate-x-10">
                <img src="/images/sittingdown.png" alt="Woman sitting down" className="w-60 h-auto rounded-lg " />
            </div>

            {/* Content Section */}
            <div className="text-center md:text-left">
                <h2 className="text-3xl">Join Us Today and Start Earning or Advertising!</h2>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                    <button className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold shadow hover:bg-gray-200 transition">
                        Create Account
                    </button>
                    <button className="bg-transparent border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition">
                        Login to Account
                    </button>
                </div>

                {/* App Store Buttons */}
                <div className="flex justify-center md:justify-start space-x-4 mt-6">
                    <img
                        src="/images/Apple.png"
                        alt="App Store"
                        className="h-12 transform hover:scale-105 transition"
                    />
                    <img
                        src="/images/Google.png"
                        alt="Google Play"
                        className="h-12 transform hover:scale-105 transition"
                    />
                </div>
            </div>
        </section>
    );
};

export default JoinUsSection;
