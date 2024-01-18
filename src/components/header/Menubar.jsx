import { useState } from "react";
import { navlinks } from "../../data/data";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

const Menubar = () => {
  const [toggleLink, setToggleLink] = useState(false);

  const toggleLinkHandler = () => {
    setToggleLink(!toggleLink);
  };

  return (
    <div className="z-50 flex md:hidden">
      <ul className="flex">
        {navlinks.slice(0, 3).map((link) => {
          return (
            <li
              key={link.title}
              className="text-white mx-2 hover:opacity-[.7] transition-all duration-75"
            >
              <Link to={link.path}>
                <link.icon />
              </Link>
            </li>
          );
        })}
        <li className="text-white mx-2 hover:opacity-[.7] transition-all duration-75 cursor-pointer relative">
          <MoreVertIcon onClick={toggleLinkHandler} />

          <ul
            className={`absolute bg-[#121212] px-[30px] mt-4  rounded-sm  transition-all duration-75 ${
              toggleLink ? "visible opacity-[1]" : "invisible opacity-0"
            }`}
          >
            {navlinks.slice(3, navlinks.length).map((link) => {
              return (
                <li
                  key={link.title}
                  className="text-white mx-2 hover:opacity-[.7] transition-all duration-75 flex my-5  relative after:content-['']  after:w-[0%] hover:after:w-[100%] after:h-[2px] after:bg-white after:absolute after:bottom-0 after:left-[-8px] after:mx-2 pb-1 after:transition-all "
                >
                  <link.icon />
                  <Link to={link.path} className="text-[16px] ml-2">
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Menubar;
