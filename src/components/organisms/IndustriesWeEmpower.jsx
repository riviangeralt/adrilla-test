import {
  CircleLeftPng,
  Dots1Png,
  Dots2Png,
  HealthCareIconSvg,
  InsuranceIconSvg,
  LendingIconSvg,
} from "../../assets";
import { GradientText } from "../atoms";
import { IndustryCard } from "../molecules";

const IndustriesWeEmpower = () => {
  const industryCards = [
    {
      iconName: HealthCareIconSvg,
      label: "Healthcare",
      description:
        "Streamline patient record management and ensure compliance with HIPAA standards.",
      position: { top: "99px", right: "158px" },
    },
    {
      iconName: LendingIconSvg,
      label: "Lending",
      description:
        "Ensure faster loan approvals with fraud detection and instant verification.",
      position: { top: "303px", right: "558px" },
    },
    {
      iconName: InsuranceIconSvg,
      label: "Insurance",
      description:
        "Automate claims processing with accurate document validation.",
      position: { left: "156px", bottom: "0px" },
    },
  ];

  return (
    <section className="px-20 relative min-h-screen mb-20">
      <img
        src={CircleLeftPng}
        alt="Circle background"
        className="absolute left-0 top-0 z-0"
      />
      <img
        src={Dots1Png}
        alt="Decorative dots"
        className="absolute top-28.5 right-99.25 z-0"
      />
      <img
        src={Dots2Png}
        alt="Decorative dots 2"
        className="absolute right-0 bottom-21 z-0"
      />
      <div className="absolute left-20 top-25.75 text-left z-10">
        <p className="font-manrope font-bold text-2xl leading-[100%]">
          <GradientText>AI-driven innovation for growth.</GradientText>
        </p>
        <h2 className="font-raleway font-semibold text-4xl leading-[100%] tracking-[-1px] text-[#141219] mt-4">
          Industries We Empower
        </h2>
      </div>

      {industryCards.map((card, index) => (
        <div key={index} className="absolute z-10" style={card.position}>
          <IndustryCard
            icon={card.iconName}
            title={card.label}
            description={card.description}
          />
        </div>
      ))}
    </section>
  );
};

export default IndustriesWeEmpower;
