import "./sass/main.scss";

import { useEffect, useRef, useState } from "react";

import { useScrollPosition, useMediaQuery } from "./hooks";

import { About } from "./pages/About";
import { Header } from "./pages/Header";

import Background from "../public/assets/images/background.png";
import { Category } from "./pages/Category";
import { Booking } from "./pages/Booking";
import { People } from "./pages/People";
import { Contact } from "./pages/Contact";
import { Footer } from "./pages/Footer";

function App() {
  const homepageOverflowRef = useRef<HTMLDivElement>(null);

  const [opacity, setOpacity] = useState<number>(1);

  const scrollValue = useScrollPosition(homepageOverflowRef);
  const isBurgerNAv = useMediaQuery("(max-width: 950px)");

  useEffect(() => {
    const getOpacityValue = () => {
      if (scrollValue >= 300) {
        const newOpacity = 1 - (scrollValue - 300) / (700 - 300);
        if (scrollValue >= 700) {
          setOpacity(0);
        } else {
          setOpacity(newOpacity);
        }
      } else {
        setOpacity(1);
      }
    };

    getOpacityValue();
  }, [scrollValue]);

  return (
    <div id="App">
      <div className="homepage">
        {!isBurgerNAv && <Header homepageOverflowRef={homepageOverflowRef} />}

        <img
          src={Background}
          className="background"
          alt=""
          style={{ "--opacity": opacity } as React.CSSProperties}
        />
        <div
          className={`homepage__overflow ${
            isBurgerNAv ? "burgerNavStyle" : ""
          } `}
          id="overflowScroll"
          ref={homepageOverflowRef}
        >
          {isBurgerNAv && <Header homepageOverflowRef={homepageOverflowRef} />}
          <About />
          <Category />
          <Booking />
          <People />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
