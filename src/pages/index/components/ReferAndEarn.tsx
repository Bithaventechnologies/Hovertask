const ReferAndEarn = () => {
    return (
        <section className="max-w-screen-lg mx-auto space-y-8 px-4 pb-28">
            {/* Title */}
            <h2 className="text-4xl bg-gradient-to-r from-[#2C418F] to-[#4B70F5] text-transparent bg-clip-text">
                Refer & Earn Money
            </h2>

            <div className="bg-gradient-to-b from-[#DAE2FF00] to-[#DAE2FF] p-6 rounded-2xl md:rounded-full flex flex-col items-center p-4">
                <div className="flex items-center max-md:flex-col">
                    {/* Description */}
                    <p className="text-gray-700 max-w-sm">
                        Share your referral link with friends and get rewarded. Earn{" "}
                        <span className="font-semibold text-blue-600">₦500</span> rewards for every new member who joins
                        the platform.
                    </p>

                    {/* Image Section */}
                    <div className="relative">
                        <img
                            src="/assets/images/closeup-shot-two-pretty-afro-american-girls-using-their-phones-while-holding-shopping-bags.png"
                            alt="Refer & Earn"
                            className="w-full max-w-md object-cover"
                        />
                        <div className="absolute top-2 right-0 bg-white px-4 py-2 rounded-lg shadow-md text-blue-600 font-semibold">
                            ₦10,000 <br />
                            Expected Future Deposit
                        </div>
                    </div>
                </div>

                {/* Bottom Highlight Section */}
                <div className="bg-blue-500 text-white text-center p-4 rounded-2xl md:rounded-full">
                    Bring new members and earn when they deposit and when they work. Passive income for life! <br />{" "}
                    Yes, it's that easy!
                </div>
            </div>
        </section>
    );
};

export default ReferAndEarn;
