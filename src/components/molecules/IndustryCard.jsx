const IndustryCard = ({ title, description, icon }) => {
  return (
    <div className="w-80 h-80 rounded-[1.25rem] p-6 bg-white shadow-[0px_0px_20px_0px_rgba(0,0,0,0.12)] flex flex-col gap-4 items-center justify-center text-center">
      <img src={icon} alt={`${title} icon`} className="w-14.25 h-14.25" />
      <h3 className="font-raleway font-semibold text-2xl leading-[100%] text-center text-[#141219]">
        {title}
      </h3>
      <p className="font-manrope font-medium text-base tracking-[-0.75px] text-center text-[#696969]">
        {description}
      </p>
    </div>
  );
};

export default IndustryCard;
