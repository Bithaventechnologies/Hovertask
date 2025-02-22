import group from "../../../assets/Group 1000004576.png";
import whatsapplogo from "../../../assets/whatsapp-removebg-preview.png";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const SectionHeader = ({ title }: { title: string }) => (
  <p className="text-4xl font-light bg-gradient-to-l from-[#2C418F] to-[#4B70F5] text-transparent bg-clip-text">
    {title}
  </p>
);

const Contactus = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center py-5">
      {/* Section Title */}
      <div className="w-full h-[20vh] flex justify-center gap-2 items-center flex-col">
        <SectionHeader title="Contact Us" />
      </div>

      {/* Background Image Section */}
      <div className="relative w-full max-w-4xl h-[20rem] rounded-2xl overflow-hidden transform rotate-[-2deg] mb-10 px-2">
        <img
          src={group}
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
          <p className="text-white text-center px-6 text-lg">
            We'd love to hear from you! Whether you have questions, feedback, or
            need assistance, feel free to reach out to us through any of the
            channels below
          </p>
        </div>
      </div>

      <Contact />
    </div>
  );
};

const Contact = () => {
  return (
    <div className="w-full max-w-6xl px-4 space-y-10">
      {/* Section Title */}
      <div className="text-center">
        <SectionHeader title="Get in Touch" />
      </div>

      {/* Contact Container */}
      <div className="flex max-md:flex-col gap-8 bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Left Section - Contact Info */}
        <div className="w-1/2 max-md:w-full bg-[#F5F7FF] p-8 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Phone className="text-[#4B70F5] w-6 h-6" />
              <div>
                <p className="font-semibold text-[#4B70F5]">Phone Number</p>
                <p>+234-XXX-XXX-XXXX</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="text-[#4B70F5] w-6 h-6" />
              <div>
                <p className="font-semibold text-[#4B70F5]">Email</p>
                <p>support@hovertask.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src={whatsapplogo}
                alt="WhatsApp"
                className="w-8 h-8 object-contain"
              />
              <div>
                <p className="font-semibold text-[#4B70F5]">WhatsApp Support</p>
                <a href="#" className="text-blue-500 hover:underline">
                  Click here to chat
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="text-[#4B70F5] w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold text-[#4B70F5]">Address</p>
                <p>Hovertask Headquarters, 123 Business Lane, Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-1/2 max-md:w-full p-8">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 rounded-md bg-[#F4F4FA] border border-gray-200 focus:outline-[#4B70F5]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-md bg-[#F4F4FA] border border-gray-200 focus:outline-[#4B70F5]"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-md h-24 bg-[#F4F4FA] border border-gray-200 focus:outline-[#4B70F5]"
            ></textarea>
            <button className="w-full bg-[#4B70F5] text-white p-3 rounded-md hover:bg-[#2C418F] transition">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="text-center space-y-6">
        <SectionHeader title="Follow Us on Social Media" />
        <div className="flex justify-center space-x-4 text-[#4B70F5]">
          {[FaYoutube, FaTwitter, FaInstagram, FaLinkedin].map(
            (Icon, index) => (
              <button
                key={index}
                className="p-3 rounded-full border border-[#4B70F5] hover:bg-[#4B70F5] hover:text-white transition"
              >
                <Icon size={24} />
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Contactus;
