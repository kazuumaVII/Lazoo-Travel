import { MouseEvent } from "react";

import { useActiveSection } from "../hooks";
import { HeaderProps } from "../types";

import { navData } from "../static";

export const Navbar = (props: HeaderProps) => {
  const { homepageOverflowRef } = props;

  const activeSection = useActiveSection(homepageOverflowRef);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isActive = (id: string) => {
    if (id === "About" && !activeSection) {
      return "active";
    } else {
      return id === activeSection ? "active" : "";
    }
  };

  const ItemNav = (props: { name: string }) => {
    const { name } = props;
    return (
      <a
        className={`nav ${isActive(name)}`}
        data-scroll={name}
        href={`#${name}`}
        onClick={(e) => handleClick(e, name)}
      >
        {name}
      </a>
    );
  };

  return (
    <div className="mainNavbar">
      <div className="navbarMenu">
        {navData.map((item, index) => (
          <ItemNav name={item.name} key={index} />
        ))}
        <button>Sign up</button>
      </div>
    </div>
  );
};
