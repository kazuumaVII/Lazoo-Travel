import { Navbar } from "../components/Navbar";

import { HeaderProps } from "../types";

import { useMediaQuery } from "../hooks";

import Logo from "../../public/assets/images/Logo.png";
import { BurgerNav } from "../components/BurgerNav";

export const Header = (props: HeaderProps) => {
  const { homepageOverflowRef } = props;

  const isBurgerNAv = useMediaQuery("(max-width: 950px)");

  return (
    <div className="mainHeader">
      <img src={Logo} alt="" />
      {isBurgerNAv ? (
        <BurgerNav homepageOverflowRef={homepageOverflowRef} />
      ) : (
        <Navbar homepageOverflowRef={homepageOverflowRef} />
      )}
    </div>
  );
};
