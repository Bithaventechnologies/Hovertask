/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import guyimge from "../assets/Rectangle 39322.png";
import logo from "../assets/brand-logo.svg";

interface InputProps {
  label: string;
  id: string;
  [key: string]: any;
}

const Input = ({ label, id, ...props }: InputProps) => (
  <div className="space-y-1">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      id={id}
      {...props}
      className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-gray-50"
    />
  </div>
);

const Signup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-5xl flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <div className="relative h-[500px] rounded-2xl overflow-hidden transform hover:rotate-0 transition-transform duration-300 rotate-[-2deg]">
            <img
              src={guyimge}
              alt="Unlock Earning Potential"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <div className="absolute bottom-0 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">
                  Unlock Your Earning Potential
                </h2>
                <p className="text-gray-200">
                  Discover endless opportunities to earn, advertise, and resell
                  products.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="pb-6 mb-6 border-b border-gray-200">
            <img src={logo} alt="Hovertask Logo" className="h-8" />
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Create a Hovertask Account
            </h2>
            <p className="text-gray-600 mt-2">
              Join our community and start earning today
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Input label="First Name" id="firstName" type="text" />
              <Input label="Last Name" id="lastName" type="text" />
            </div>

            <Input label="Email Address" id="email" type="email" />

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Referrer's Username"
                id="referrer"
                type="text"
                placeholder="Optional"
              />
              <Input label="Username" id="username" type="text" />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="accountType"
                className="block text-sm font-medium text-gray-700"
              >
                Select How You Want to Use Hovertask
              </label>
              <select
                id="accountType"
                className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-gray-50"
              >
                <option value="">Select How You Want to Use Hovertask</option>
                <option value="earn">Earn Money</option>
                <option value="advertise">Advertise Products</option>
                <option value="resell">Resell Products</option>
              </select>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
              </div>
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  General Terms of Use
                </a>{" "}
                &{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg shadow-blue-600/20">
              Create Account
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
