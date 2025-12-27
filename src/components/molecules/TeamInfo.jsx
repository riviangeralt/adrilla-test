const TeamInfo = ({ member }) => {
  return (
    <div className="mt-5 flex justify-center">
      <div className="w-3/5 bg-[#3E6EB4] rounded-2xl flex flex-col justify-center items-center p-6 relative text-white">
        <svg className="w-10 h-10 text-[#3E6EB4] absolute -top-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 4l8 8H4l8-8z"/>
        </svg>
        <h3 className="font-raleway font-bold text-[2.25rem] tracking-[0px] text-[#FFFFFF] align-middle">{member.name}</h3>
        <p className="font-manrope font-normal text-[1.5rem] tracking-[0px] text-center text-[#CD6028] mt-2.5">{member.designation}</p>
        <p className="font-manrope font-normal text-[1rem] tracking-[0px] text-center align-middle text-[#FFFFFF] mt-7.5 whitespace-pre-line">"{member.quote}"</p>
      </div>
    </div>
  );
};

export default TeamInfo;