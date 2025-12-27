import { Hero1Png, MissionIcon, VisionIcon } from "../../assets";
import { AboutUsTag, GradientText } from "../atoms";

const AboutUsMain = () => {
  const tags = [
    {
      title: "Our \nVision",
      description:
        "To redefine document management with cutting-edge technology that \nensures accuracy, efficiency, and trust.",
      icon: VisionIcon,
      isLeftAligned: true,
    },
    {
      title: "Our \nMission",
      description:
        "To redefine document management with cutting-edge technology that \nensures accuracy, efficiency, and trust.",
      icon: MissionIcon,
      isLeftAligned: false,
    },
  ];

  return (
    <section
      className="pt-16.75 pb-7 bg-cover bg-center bg-no-repeat min-h-screen flex flex-col relative gap-20"
      style={{ backgroundImage: `url(${Hero1Png})` }}
    >
      <div className="absolute inset-0 bg-white opacity-80 z-1"></div>
      <div className="w-135.5 max-h-min rounded-[15px] p-12.5 bg-white/50 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.12)] mx-auto relative z-10">
        <h1 className="font-raleway font-semibold text-5xl leading-[100%] tracking-[-1px] text-center mb-4">
          About Us
        </h1>
        <p className="font-manrope font-normal text-[20px] leading-[100%] text-center">
          <GradientText>
            Meet the Minds Shaping Document Automation.
          </GradientText>
        </p>
      </div>

      {tags.map((tag) => (
        <AboutUsTag
          key={JSON.stringify(tag)}
          title={tag.title}
          description={tag.description}
          icon={tag.icon}
          isLeftAligned={tag.isLeftAligned}
        />
      ))}
    </section>
  );
};

export default AboutUsMain;
