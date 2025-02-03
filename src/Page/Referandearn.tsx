import referImage from "../assets/twogirls.png"; // Replace with your actual image path

const ReferAndEarn = () => {
  return (
    <div className="bg-gradient-to-b from-[#DAE2FF] to-[#DAE2FF00] py-16 px-6 rounded-xl  flex flex-col items-center text-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-blue-700 flex items-center space-x-2">
        Refer & Earn Money
      </h2>

      {/* Description */}
      <p className="text-gray-700 max-w-xl mt-4">
        Share your referral link with friends and get rewarded. Earn{" "}
        <span className="font-semibold text-blue-600">₦500</span> rewards for
        every new member who joins the platform.
      </p>

      {/* Image Section */}
      <div className="relative mt-8">
        <img
          src={referImage}
          alt="Refer & Earn"
          className="w-full max-w-md object-cover"
        />
        <div className="absolute top-2 right-0 bg-white px-4 py-2 rounded-lg shadow-md text-blue-600 font-semibold">
          ₦10,000 <br />
          Expected Future Deposit
        </div>
      </div>

      {/* Bottom Highlight Section */}
      <div className="bg-blue-500 text-white py-3 px-12 rounded-lg mt-6 text-lg font-medium max-w-lg">
        Bring new members and earn when they deposit and when they work. Passive
        income for life!
        <br />
        <span className="font-bold">Yes, it's that easy!</span>
      </div>
    </div>
  );
};

export default ReferAndEarn;
