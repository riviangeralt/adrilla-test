import { IndustriesWeEmpower, OurProducts, Blogs, ContactUs } from "../components/organisms";
import HeroSection from "../components/organisms/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <IndustriesWeEmpower />
      <OurProducts />
      <Blogs />
      <ContactUs />
    </>
  );
};

export default Home;