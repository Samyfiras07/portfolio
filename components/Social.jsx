import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaMedium } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Samyfiras07" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/sami-firas-laissoub-26b6ab2b4/",
  },
  { icon: <FaInstagram />, path: "https://www.instagram.com/samy_codes/" },
  { icon: <FaMedium />, path: "" },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
