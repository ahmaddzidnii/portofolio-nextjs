import { auth } from "@clerk/nextjs";
import AnimatedText from "../_components/animation-text";
import FormComponents from "./_components/Form";

export const metadata = {
  title: "Contact",
  description: "Contact me",
};
const ContactPage = async () => {
  const user = true;

  return (
    <div className="mt-32 w-full h-screen xs:mt-8 lg:mt-16">
      <AnimatedText text="contact me" className="lg:!text-7xl sm:!text-6xl xs:!text-3xl  mb-16 sm:mb-8" />

      <div className="w-[70%] mx-auto mt-16  lg:mt-4 sm:w-full">
        <FormComponents />
      </div>
    </div>
  );
};

export default ContactPage;
