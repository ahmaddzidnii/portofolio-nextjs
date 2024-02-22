import AnimatedText from "@/components/framer-motion/animation-text";
import FormComponents from "./_components/Form";

export const metadata = {
  title: "Contact",
  description: "Contact me",
};
const ContactPage = async () => {
  return (
    <div className="mt-32 min-h-screen w-full lg:mt-16 xs:mt-8">
      <AnimatedText
        text="contact me"
        className="mb-16 lg:!text-7xl sm:mb-8  sm:!text-6xl xs:!text-3xl"
      />

      <div className="mx-auto mt-16 w-[70%]  lg:mt-4 sm:w-full">
        <FormComponents />
      </div>
    </div>
  );
};

export default ContactPage;
