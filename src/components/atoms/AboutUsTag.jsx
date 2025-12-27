const AboutUsTag = ({ className = "", isLeftAligned, title, description, icon }) => {
  return (
    <div
      className={` p-3.5 bg-[rgba(255,255,255,0.5)] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.12)] flex gap-7 items-center z-10 ${
        !isLeftAligned
          ? "ml-auto flex-row-reverse rounded-l-full"
          : "mr-auto rounded-r-full"
      } ${className}`}
    >
      <pre className={`font-manrope font-medium text-base tracking-[-0.75px] ${!isLeftAligned ? "text-left mr-20" : "text-right ml-20"} text-[#696969]`}>
        {description}
      </pre>
      <div className="h-19.75 w-1 bg-[#CD6028] rounded-2xl" />
      <pre><h3 className={`font-raleway font-bold text-[24px] leading-9.5 text-[#141219] ${isLeftAligned ? "text-left" : "text-right"}`}>{title}</h3></pre>
      <div className="w-28 h-28 rounded-full bg-[#3E6EB4] flex items-center justify-center">
        <img src={icon} alt="icon" className="w-12.5 h-12.5 object-cover" />
      </div>
    </div>
  );
};

export default AboutUsTag;
