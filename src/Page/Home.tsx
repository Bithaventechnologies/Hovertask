import AnotherSection from "./anothersection";
import Hero from "./Hero";
import HowToUseSection from "./howtouse";
import JoinUsSection from "./join";
import Newsletter from "./newsletter";
import OtherSection from "./othersection";
import ReferAndEarn from "./Referandearn";

const Home = () => {
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

export default Home;
