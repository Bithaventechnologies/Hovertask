import { Link } from "react-router-dom";

const JoinUsSection = () => {
    return (
        <section className="relative bg-gradient-to-r from-[#4B70F5] to-[#2C418F] text-white rounded-full flex items-center p-4 max-w-screen-lg mx-auto overflow-hidden max-md:rounded-2xl max-md:py-10 mb-28">
            {/* Image Section */}
            <div className="max-md:hidden -translate-x-2">
                <img src="/assets/images/sittingdown.png" alt="Woman sitting down" />
            </div>

            {/* Content Section */}
            <div className="text-center md:text-left">
                <h2 className="text-4xl">Join Us Today and Start Earning or Advertising!</h2>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                    <Link
                        to="#"
                        className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold shadow hover:bg-gray-200 transition"
                    >
                        Create Account
                    </Link>
                    <Link
                        to="#"
                        className="bg-transparent border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
                    >
                        Login to Account
                    </Link>
                </div>

                {/* App Store Buttons */}
                <div className="flex justify-center md:justify-start space-x-4 mt-6">
                    <img
                        src="/assets/images/Apple.png"
                        alt="App Store"
                        className="h-12 transform hover:scale-105 transition"
                    />
                    <img
                        src="/assets/images/Google.png"
                        alt="Google Play"
                        className="h-12 transform hover:scale-105 transition"
                    />
                </div>
            </div>
        </section>
    );
};

export default JoinUsSection;
