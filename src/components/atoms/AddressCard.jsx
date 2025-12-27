import { LocationSvg } from '../../assets/svg';

const AddressCard = ({ title, officeName, address }) => {
  return (
    <div className="mb-6">
      <div className="flex gap-2 items-center mb-2">
        <img src={LocationSvg} alt="location" className="h-4" />
        <h3 className="font-raleway font-bold text-base underline">
          {title}
        </h3>
      </div>
      <p className="font-manrope font-normal text-sm">
        {officeName}
      </p>
      <p className="font-manrope font-normal text-sm">
        {address}
      </p>
    </div>
  );
};

export default AddressCard;