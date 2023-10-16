import { Navbar } from "../components/Navbar";

import { HeaderProps } from "../types";

import { useMediaQuery } from "../hooks";

import Logo from "../../public/assets/images/Lazoo.png";
import { BurgerNav } from "../components/BurgerNav";
import { useState, useEffect } from "react";

export const Header = (props: HeaderProps) => {
  const { homepageOverflowRef } = props;

  const isBurgerNAv = useMediaQuery("(max-width: 950px)");

  const [isOpacity, setIsOpacity] = useState(0);

  useEffect(() => {
    if (isBurgerNAv) {
      setIsOpacity(1);
    } else {
      setIsOpacity(2);
    }
  }, [isBurgerNAv]);

  return (
    <div
      className={`mainHeader ${isBurgerNAv ? "burgerNavStyle" : ""} 
			${isOpacity === 0 ? "noStyle" : ""}
		
		`}
    >
      <img src={Logo} alt="" />
      {isBurgerNAv ? (
        <BurgerNav homepageOverflowRef={homepageOverflowRef} />
      ) : (
        <Navbar homepageOverflowRef={homepageOverflowRef} />
      )}
    </div>
  );
};
