import { FaPlay } from "react-icons/fa";

const HowToUseSection = () => {
    return (
        <section className="bg-white pb-20 px-4 rounded-lg  flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Title & Description (Placed at the Top) */}
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#2C418F] to-[#4B70F5] text-transparent bg-clip-text max-md:textxl">
                How Easy to Use Hovertask
            </h2>

            <p className="text-gray-600 mb-6">
                Whether you're an Earner or an Advertiser, getting started is simple! Follow these easy steps to achieve
                your goals.
            </p>

            {/* Image & Overlay (Centered) */}
            <div className="relative w-full max-w-lg">
                <img src="/assets/images/how.png" alt="How to Use Hovertask" className="rounded-lg w-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 text-white bg-red-500 rounded-full p-3 shadow-lg flex justify-center items-center">
                        <FaPlay />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowToUseSection;
