import { Button, ProductTag } from "../atoms";
import { CircleRightPng, CircleLeftPng } from "../../assets";

const ProductCard = ({
  productTag,
  title,
  features,
  benefits,
  image,
  isLeftAligned,
}) => {
  return (
    <div className="rounded-lg flex flex-col gap-4 mb-8 relative">

      <div
        className={`flex gap-8 ${
          isLeftAligned ? "flex-row" : "flex-row-reverse"
        } relative z-10`}
      >
        <div className="flex-1 pl-20.5">
          <ProductTag>{productTag}</ProductTag>
          <h3 className="font-raleway font-bold text-[2rem] leading-12 text-[#141219] mb-4 mt-4">
            {title}
          </h3>

          <div className="mb-4">
            <h4 className="font-raleway font-bold text-xl leading-8 text-[#696969]">
              Features:
            </h4>
            <ul className="list-disc list-inside space-y-1">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className="font-manrope font-normal text-base leading-8 text-[#696969]"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h4 className="font-raleway font-bold text-[20px] leading-[100%] text-[#696969] mb-2">
              Benefits:
            </h4>
            <ul className="list-disc list-inside space-y-1">
              {benefits.map((benefit, idx) => (
                <li
                  key={idx}
                  className="font-manrope font-normal text-base leading-8 text-[#696969]"
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-7">
            <Button>Learn More</Button>
            <Button>Schedule a Demo</Button>
          </div>
        </div>

        <div
          className={`flex-1 relative ${
            isLeftAligned ? "pr-19.25" : "pl-20.5"
          }`}
        >
          <img
            src={image}
            alt={title}
            className="w-150.25 h-126 object-cover z-10"
          />
          <img
            src={isLeftAligned ? CircleRightPng : CircleLeftPng}
            alt="Circle background"
            className={`absolute ${
              !isLeftAligned ? "left-0" : "right-0"
            } -top-36 z-[-1]`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
