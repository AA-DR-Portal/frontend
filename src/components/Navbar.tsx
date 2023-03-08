import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);

  const links = [
    { name: "My Applications", linkTo: "" },
    { name: "Why Us", linkTo: "" },
    { name: "Expo Map", linkTo: "" },
    { name: "Rules", linkTo: "" },
  ];

  return (
    <div
      className={
        // Constant
        "fixed flex w-[100vw] min-w-screen h-[8vh] bg-cpac-black items-center z-10 py-4 [&>a]:text-cpac-white " +
        // Mobile
        "px-2 [&>a]:hidden" +
        // Desktop
        " md:px-10 md:space-x-8 md:[&>a]:block md:[&>button]:hidden"
      }
    >
      {/* Logo */}
      <a href="">
        <img src="./logo.png" alt="" width={"35px"} />
      </a>

      {/* Links */}
      {links.map((link) => (
        <a href={link.linkTo}>{link.name}</a>
      ))}

      {/* Login Button */}
      <a
        href=""
        className="!ml-auto !mr-0 px-4 py-2 border rounded-md bg-clip-border transition-all hover:bg-cpac-white hover:text-cpac-black"
      >
        Login
      </a>

      {/* Mobile Hamburger */}
      <button
        onClick={() => (toggled ? setToggled(false) : setToggled(true))}
        className="!ml-auto !mr-0"
      >
        <FontAwesomeIcon icon={faBars} size="xl" />
      </button>

      <HamburgerMenu links={links} toggled={toggled} setToggled={setToggled} />
    </div>
  );
};

interface Link {
  name: string;
  linkTo: string;
}

interface HamburgerMenuProps {
  links: Link[];
  toggled: boolean;
  setToggled: Function;
}

const HamburgerMenu = ({ links, toggled, setToggled }: HamburgerMenuProps) => {
  if (!toggled) return <></>;

  return (
    <div className="md:hidden fixed flex flex-col py-24 left-0 top-0 min-w-[100vw] min-h-[100vh] bg-cpac-black space-y-8 items-center [&>a]:text-cpac-white">
      {/* Mobile Hamburger */}
      <button
        onClick={() => (toggled ? setToggled(false) : setToggled(true))}
        className="top-0 right-0 mx-4 my-2 absolute"
      >
        <FontAwesomeIcon icon={faBars} size="xl" />
      </button>

      {/* Logo */}
      <a href="">
        <img src="./logo.png" alt="" width={"50px"} />
      </a>

      {links.map((link) => (
        <a href={link.linkTo}>{link.name}</a>
      ))}
    </div>
  );
};

export { Navbar };
