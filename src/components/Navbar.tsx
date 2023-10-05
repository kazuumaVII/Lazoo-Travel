import { MouseEvent } from "react";

import { useActiveSection } from "../hooks";
import { HeaderProps } from "../types";

import Logo from "../../public/assets/images/Logo.png";

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
    if (id === "about" && !activeSection) {
      return "active";
    } else {
      return id === activeSection ? "active" : "";
    }
  };

  return (
    <div className="mainNavbar">
      <nav>
        <img src={Logo} alt="" />
        <div className="navbarMenu">
          <a
            className={`nav ${isActive("about")}`}
            data-scroll="about"
            href="#about"
            onClick={(e) => handleClick(e, "about")}
          >
            Destination
          </a>
          <a
            className={`nav ${isActive("services")}`}
            data-scroll="services"
            href="#services"
            onClick={(e) => handleClick(e, "services")}
          >
            Hotels
          </a>
          <a
            className={`nav ${isActive("techno")}`}
            data-scroll="techno"
            href="#techno"
            onClick={(e) => handleClick(e, "techno")}
          >
            Flights
          </a>
          <a
            className={`nav ${isActive("contact")}`}
            data-scroll="contact"
            href="#contact"
            onClick={(e) => handleClick(e, "contact")}
          >
            Bookings
          </a>
          <a
            className={`nav ${isActive("contact")}`}
            data-scroll="contact"
            href="#contact"
            onClick={(e) => handleClick(e, "contact")}
          >
            Login
          </a>
          <button>
            <span>Sign up</span>
          </button>
        </div>
      </nav>
    </div>
  );
};
