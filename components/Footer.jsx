import { assets, socialLinks } from "@/assets/assets";
import Image from "next/image";

const Footer = ({ isDarkMode }) => {
  return (
    <>
      <div className=" mt-20">
        <div className=" text-center">
          <Image
            src={assets.logoNiloy}
            alt="logo"
            className=" w-36 mx-auto mb-2"
          />
          <div className=" w-max flex items-center gap-2 mx-auto">
            <a href="mailto:niloykumarmohonta@gmail.com">
              <Image src={assets.mail_icon} alt="logo" className="w-6" />
            </a>
            niloykumarmohonta@gmail.com
          </div>
        </div>
        <div className=" text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
          <p>&copy; 2025 Niloy Kumar Mohonta | All rights reserved</p>
          <ul className=" flex items-center gap-4 md:gap-10 justify-center mt-4 sm:mt-0">
            {socialLinks.map((sites, index) => (
              <li key={index}>
                <a target="_blank" href={sites.url}>
                  {sites.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
