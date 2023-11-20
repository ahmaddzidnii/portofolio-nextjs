import { Logo } from "./logo";

const Footer = () => {
  return (
    <footer className="w-full h-20 border-t shadow-sm flex justify-between items-center px-5 mt-20">
      <div className=" block sm:hidden">
        <Logo />
      </div>
      <div>
        made with <span className="text-rose-500">&#10084;</span>
      </div>
      <div>
        &copy;
        {`${new Date().getFullYear()} All Rights Reserved`}
      </div>
    </footer>
  );
};

export default Footer;
