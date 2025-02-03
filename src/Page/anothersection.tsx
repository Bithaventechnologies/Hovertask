import handphone from "../assets/handofphone.png";

const AnotherSection = () => {
  return (
    <div className=" h-screen flex items-center justify-center px-8">
      {/* Text Content */}
      <div className="container max-w-lg ">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#2C418F] to-[#4B70F5] text-transparent bg-clip-text max-md:textxl">
          Earn money by helping other people grow
        </h1>
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
      <div className="hidden lg:block w-1/2">
        <img
          src={handphone}
          alt="Phone with Social Media Icons"
          className="w-full object-cover h-full"
        />
      </div>
    </div>
  );
};

export default AnotherSection;
