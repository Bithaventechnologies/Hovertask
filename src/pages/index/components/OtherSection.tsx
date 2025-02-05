const OtherSection = () => {
    return (
        <section className="bg-blue-50/20 flex flex-col items-center text-center pb-28">
            {/* Header */}
            <h2 className="bg-gradient-to-r from-blue-100 via-blue-400 to-blue-100 text-white w-full px-8 py-3 rounded-lg text-3xl -translate-y-1">
                Unleash the Power of Social Media Advertising
            </h2>
            <p className="px-4 py-6 text-center max-w-lg mx-auto text-lg">
                What if you could get thousands of users with strong social media influence to share your ad with their
                engaged followers? That’s what we bring to the table.
            </p>

            {/* Content Container */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center w-full max-w-6xl">
                {/* Floating Dashboard Images */}
                <div>
                    <img src="/assets/images/app-uis.png" alt="App Dashboard UI" className="m-auto rounded-2xl block" />
                </div>

                {/* Features Cards */}
                <div className="space-y-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#DAE2FF4D] p-6 rounded-lg shadow-lg max-w-xs text-left transform rotate-[-5deg] mx-auto"
                        >
                            <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                            <p className="text-gray-600 mt-2">{feature.description}</p>
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                                Start Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const features = [
    {
        title: "Boost Your Brand Visibility",
        description:
            "Each user who shares your ad has a minimum of 1,000 active followers, ensuring massive exposure in record time—driving conversions and skyrocketing your revenue."
    },
    {
        title: "Cost-Effective Advertising Solutions",
        description:
            "Maximize your reach without overspending. For as little as ₦150, you can have influential users post your ads to their audience, giving you great value at a fraction of the cost."
    },
    {
        title: "Earn Passive Income Every Day",
        description:
            "Join HoverTask and start earning daily by posting ads for top businesses and brands on your social media accounts. It's quick, easy, and rewarding."
    }
];

export default OtherSection;
