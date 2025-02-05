import AnotherSection from "./components/AnotherSection";
import Hero from "./components/Hero";
import HowToUseSection from "./components/HowToUse";
import JoinUsSection from "./components/JoinUsSection";
import Newsletter from "./components/NewsLetter";
import OtherSection from "./components/OtherSection";
import ReferAndEarn from "./components/ReferAndEarn";

const LandingPage = () => {
    return (
        <>
            <Hero />
            <OtherSection />
            <HowToUseSection />
            <AnotherSection />
            <ReferAndEarn />
            <JoinUsSection />
            <Newsletter />
        </>
    );
};

export default LandingPage;
