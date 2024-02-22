import { Logo } from "./logo";

const Footer = () => {
  return (
    <footer className="mt-20 flex h-20 w-full items-center justify-between border-t px-5 shadow-sm sm:justify-center">
      <div className=" block sm:hidden">
        <Logo />
      </div>
      <div>
        made with <span className="text-rose-500">&#10084;</span>
      </div>
      <div className="block sm:hidden">
        &copy;
        {`${new Date().getFullYear()} All Rights Reserved`}
      </div>
    </footer>
  );
};

export default Footer;
