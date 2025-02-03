import { motion } from "framer-motion";
import appStore from "../assets/Apple.png";
import googlePlay from "../assets/Google.png";
import heroImage from "../assets/black-girls-city.png";

const Hero = () => {
  const statsData = [
    { value: "500k+", label: "Members" },
    { value: "123k+", label: "Downloads" },
    { value: "120k+", label: "Advertisers" },
    { value: "15M+", label: "Advert Views" },
  ];

  return (
    <div className=" Hero relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <div className="space-y-6 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Earn or Advertise on Social Media and Grow Your Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-xl mx-auto lg:mx-0"
          >
            Earn by completing simple social media tasks or advertise your
            products to the right audience.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          >
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Create Account
            </button>
            <button className="w-full sm:w-auto px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
              Login to Account
            </button>
          </motion.div>

          {/* App Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center lg:justify-start space-x-4 mt-6"
          >
            <img
              src={appStore}
              alt="Download on App Store"
              className="h-12 transform hover:scale-105 transition cursor-pointer"
            />
            <img
              src={googlePlay}
              alt="Get it on Google Play"
              className="h-12 transform hover:scale-105 transition cursor-pointer"
            />
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden lg:block relative"
        >
          <img
            src={heroImage}
            alt="Hero"
            className="w-full rounded-lg  object-cover"
          />
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {statsData.map((stat, index) => (
              <div key={index}>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-blue-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
