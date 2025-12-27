import { GradientText, AddressCard } from "../atoms";
import { ContactForm } from "../molecules";
import { Dots2Png } from "../../assets";

const ContactUs = () => {
  const addresses = [
    {
      title: "U.S. Office",
      officeName: "Aadrila Technologies INC,",
      address:
        "8 The Green, Ste R, in the City of Dover County of Kent Zip Code 19901.",
    },
    {
      title: "India Office",
      officeName: "Aadrila Technologies Private Limited,",
      address:
        "Unit 707, Lotus Trade Centre, Sahakar Nagar, New Link Road, Near D.N.Nagar, Andheri West, Mumbai, Maharashtra 400053.",
    },
  ];

  return (
    <section className="mt-40 relative">
      <img
        src={Dots2Png}
        alt="Decorative dots"
        className="absolute -top-24 left-[-9%] z-0"
      />
      <div className="flex mx-20 relative z-10 gap-6">
        <div className="flex-1">
          <h2 className="font-raleway font-semibold text-[48px] tracking-[-1px] text-[#141219] mb-4">
            Contact Us
          </h2>
          <pre className="font-manrope font-normal text-xl mb-10">
            <GradientText>
              Lorem Ipsum is simply dummy text of the printing and {"\n"}
              typesetting industry. Lorem Ipsum has been the industry's.
            </GradientText>
          </pre>

          <div className="mt-10">
            {addresses.map((address, index) => (
              <AddressCard
                key={index}
                title={address.title}
                officeName={address.officeName}
                address={address.address}
              />
            ))}
          </div>
        </div>

        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
