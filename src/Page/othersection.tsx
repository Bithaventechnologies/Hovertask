const OtherSection = () => {
  return (
    <section className="relative bg-gray-50 py-16 flex flex-col items-center text-center">
      {/* Header */}
      <div className="bg-gradient-to-r from-white via-blue-500 to-white text-white text-lg md:text-xl w-full font-semibold px-8 py-3 rounded-lg">
        Unleash the Power of Social Media Advertising
      </div>

      {/* Content Container */}
      <div className="relative mt-10 flex flex-col lg:flex-row justify-center items-center w-full max-w-6xl">
        {/* Floating Dashboard Images */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="relative w-80 h-60 md:w-96 md:h-72 lg:w-[400px] lg:h-[300px]">
            <img
              src="/dashboard-1.png"
              alt="Dashboard"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="absolute top-20 left-10 w-72 h-56 md:w-80 md:h-64 lg:w-[350px] lg:h-[250px]">
            <img
              src="/dashboard-2.png"
              alt="Dashboard"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Features Cards */}
        <div className="mt-10 lg:mt-0 lg:ml-16 space-y-6 relative">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-[#DAE2FF4D] p-6 rounded-lg shadow-lg max-w-xs text-left transform rotate-[-6deg] skew-x-[-5deg]`}
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
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
      "Each user who shares your ad has a minimum of 1,000 active followers, ensuring massive exposure in record time—driving conversions and skyrocketing your revenue.",
  },
  {
    title: "Cost-Effective Advertising Solutions",
    description:
      "Maximize your reach without overspending. For as little as ₦150, you can have influential users post your ads to their audience, giving you great value at a fraction of the cost.",
  },
  {
    title: "Earn Passive Income Every Day",
    description:
      "Join HoverTask and start earning daily by posting ads for top businesses and brands on your social media accounts. It's quick, easy, and rewarding.",
  },
];

export default OtherSection;
