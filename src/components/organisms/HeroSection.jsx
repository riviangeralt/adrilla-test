import { useEffect, useState } from "react";
import { Doc1Png, Doc2Png, Doc3Png, Hero1Png } from "../../assets";
import { Button, GradientText } from "../atoms";

const HeroSection = () => {
  const [selectedDoc, setSelectedDoc] = useState(0);
  const docs = [Doc1Png, Doc2Png, Doc3Png];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedDoc((prev) => (prev + 1) % docs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [docs.length]);

  return (
    <section
      className="flex items-center justify-center min-h-screen px-20 bg-cover bg-center bg-no-repeat -mt-24 relative"
      style={{ backgroundImage: `url(${Hero1Png})` }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-40 z-0"
        style={{
          background: 'linear-gradient(360deg, #FFFFFF 23.83%, rgba(255, 255, 255, 0.816193) 59.33%, rgba(255, 255, 255, 0.545244) 85.33%, rgba(255, 255, 255, 0) 100%)'
        }}
      ></div>
      <div className="flex w-full max-w-7xl">
        <div className="flex-1 mb-6">
          <h1 className="font-raleway font-bold text-5xl leading-[68.25px] mb-6 text-[#141219]">
            <GradientText>AI-Powered</GradientText>
            <br />
            Document Automation
            <br />& Fraud Detection
          </h1>
          <p className="font-manrope font-medium text-[20px] leading-[31.2px] text-[#1E1C26] mb-9">
            Enhance security, accuracy, and efficiency with our cutting-edge AI
            solutions for seamless document processing and fraud prevention.
          </p>
          <div className="flex gap-10">
            <Button className="w-full">Get a Demo</Button>
            <Button className="w-full">Explore Solutions</Button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-150 h-105">
            {docs.map((doc, index) => {
              const position =
                (index - selectedDoc + docs.length) % docs.length;

              const positions = {
                0: { x: 0, scale: 1, z: 10, opacity: 1, blur: "blur-0" },
                1: { x: 220, scale: 0.5, z: 5, opacity: 0.7, blur: "blur-sm" },
                2: { x: -220, scale: 0.5, z: 5, opacity: 0.7, blur: "blur-sm" },
              };

              const { x, scale, z, opacity, blur } = positions[position];

              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 transition-all duration-1500 ease-out"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${x}px) scale(${scale})`,
                    zIndex: z,
                    opacity,
                  }}
                >
                  <img
                    src={doc}
                    alt={`Document ${index + 1}`}
                    className={`w-80 h-96 object-cover ${blur}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
