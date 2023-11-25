import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const endNavbar = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/ahmadzidni1/",
    icon: <AiFillInstagram className="w-7 h-7" />,
    tooltip: "Follow me on Instagram",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ahmad-zidni-51b602292/",
    icon: <FaLinkedin className="w-7 h-7" />,
    tooltip: "Follow me on Linkedin",
  },
  {
    name: "Github",
    href: "https://github.com/ahmaddzidnii",
    icon: <FaGithub className="w-7 h-7" />,
    tooltip: "Follow me on Github",
  },
];

export const midNavbar = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
