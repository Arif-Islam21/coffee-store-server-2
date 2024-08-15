import { SiCoffeescript } from "react-icons/si";
import footerBg from "../../public/cool-background.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="flex flex-col lg:flex-row items-center justify-around p-10"
      >
        <aside className="">
          <SiCoffeescript className="h-24 w-20 text-[#331A15]"></SiCoffeescript>
          <p className="font-rancho text-2xl text-[#331A15] font-bold">
            Espresso Emporium
          </p>
          <p className="font-raleway max-w-md py-2">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="py-2 grid max-w-xs grid-cols-4 gap-3">
            <FaFacebook className="h-10 w-10 text-[#331A15]" />
            <FaTwitter className="h-10 w-10 text-[#331A15]" />
            <FaInstagram className="h-10 w-10 text-[#331A15]" />
            <FaLinkedin className="h-10 w-10 text-[#331A15]" />
          </div>
          <h2 className="text-[#331A15] text-3xl py-2 font-rancho font-bold ">
            Get In Touch
          </h2>
          <p className="flex items-center gap-2 font-semibold mt-2">
            <FaPhone /> +88 0183 3668024
          </p>
          <p className="flex items-center gap-2 font-semibold mt-2">
            <MdEmail /> arif.sojib2020@gmail.com
          </p>
          <p className="flex items-center gap-2 font-semibold mt-2">
            <FaLocationArrow /> Araji Choraikhola , Mokterpara, Nilphamari
          </p>
        </aside>
        <nav className="flex flex-col items-center justify-center">
          <h6 className="footer-title font-rancho text-2xl font-bold text-[#331A15]">
            Connect With us
          </h6>
          <div className="grid lg:min-w-96 py-2 max-w-md grid-flow-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="input bg-gray-200 w-full max-w-xl"
            />
          </div>
          <div className="grid lg:min-w-96 py-2 max-w-md grid-flow-col gap-4">
            <input
              type="text"
              placeholder="E-mail"
              className="input bg-gray-200 w-full max-w-xl"
            />
          </div>
          <div className="grid lg:min-w-96 py-2 max-w-md grid-flow-col gap-4">
            <textarea
              className="textarea bg-gray-200"
              placeholder="Message"
            ></textarea>
          </div>
        </nav>
      </footer>
      <footer
        style={{
          backgroundImage:
            "URL(https://img.freepik.com/free-photo/close-up-view-dark-fresh-roasted-coffee-beans-coffee-beans-background_141793-27283.jpg?size=626&ext=jpg&ga=GA1.1.1305675034.1693990964&semt=ais_hybrid)",
        }}
        className="footer footer-center text-base-content p-2"
      >
        <aside>
          <p className="text-white font-raleway">
            Copyright Espresso Emporium ! All Rights Reserved
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
