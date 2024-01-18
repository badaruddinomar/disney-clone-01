import { navlinks } from "../../data/data";
import logo from "../../images/logo/logo.png";
import avatar from "../../images/avatar.png";
import Menubar from "./Menubar";

const Header = () => {
  return (
    <nav className="flex items-center h-[100px] w-full px-[20px] md:px-[50px]">
      {/* FIRST DIV-- */}
      <div>
        <img
          src={logo}
          alt="logo"
          className="w-[80px] object-cover md:w-[115px] mr-5"
        />
      </div>
      {/* SECOND DIV-- */}
      <ul className="hidden md:flex">
        {navlinks.map((link) => {
          return (
            <li
              key={link.title}
              className="text-white flex items-center cursor-pointer hover:opacity-[.7] relative after:content-['']  after:w-[0%] hover:after:w-[100%] after:h-[2px] after:bg-white after:absolute after:bottom-0 after:left-[-8px] after:mx-2 mx-5 pb-1 transition after:transition-all duration-700 "
            >
              <link.icon />
              <a
                href={link.path}
                className="text-white mx-1 font-semibold text-[18px] inline-block "
              >
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
      {/* MENU BAR FOR SMALL DEVICE */}
      <Menubar />
      {/* THIRD DIV-- */}
      <div className="justify-end ml-auto">
        <img
          src={avatar}
          alt="avatar"
          className="w-[40px] h-[40px] rounded-full cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Header;
