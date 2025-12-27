import { BlogBgSvg } from "../../assets";

const BlogCard = ({ title, datePosted, description }) => {
  return (
    <div className="p-6.25 relative">
      <img src={BlogBgSvg} alt="Blog Background" className="w-full h-27.5 object-cover absolute bottom-0 left-0 -z-1" />
      <div className="bg-white rounded-lg overflow-hidden p-6 pb-9 border border-[#EDEDED] z-11 mx-auto">
        <h3 className="font-raleway font-bold text-base leading-[100%] text-[#141219] mb-2.5">
          {title}
        </h3>
        <p className="font-manrope font-medium text-xs leading-[100%] text-[#719AD0] mb-4">
          {datePosted}
        </p>
        <p className="font-manrope font-normal text-sm text-[#696969]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
