import { Button, Input } from '../atoms';

const ContactForm = () => {
  return (
    <div className="w-171 rounded-[20px] py-20 px-12.5 bg-white shadow-[0px_0px_20px_0px_rgba(0,0,0,0.12)]">
      <form className="space-y-6 h-full flex flex-col">
        {/* First line: Full Name and Email */}
        <div className="flex gap-8">
          <Input
            type="text"
            placeholder="Full Name"
            className="flex-1"
          />
          <Input
            type="email"
            placeholder="Email"
            className="flex-1"
          />
        </div>
        
        {/* Second line: Phone Number and Company Name */}
        <div className="flex gap-8">
          <Input
            type="tel"
            placeholder="Phone Number"
            className="flex-1"
          />
          <Input
            type="text"
            placeholder="Company Name"
            className="flex-1"
          />
        </div>
        
        {/* Third line: Enquiry Type */}
        <div>
          <Input
            type="text"
            placeholder="Enquiry Type"
            className="flex-1 w-full"
          />
        </div>
        
        {/* Fourth line: Message */}
        <div className="flex-1 w-full">
          <Input
            name="message"
            placeholder="Message"
            className="flex-1 w-full"
            id="message"
            as="textarea"
            rows={8}
            resize="none"
            style={{ resize: 'none' }}
          />
        </div>

        <Button>Send Inquiry</Button>
      </form>
    </div>
  );
};

export default ContactForm;