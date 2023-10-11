import "./sass/main.scss";

import { useEffect, useRef, useState } from "react";

import { useScrollPosition } from "./hooks";

import { About } from "./pages/About";
import { Header } from "./pages/Header";

import Background from "../public/assets/images/background.png";
import { Category } from "./pages/Category";
import { Booking } from "./pages/Booking";
import { People } from "./pages/People";

function App() {
  const homepageOverflowRef = useRef<HTMLDivElement>(null);

  const [opacity, setOpacity] = useState<number>(1);

  const scrollValue = useScrollPosition(homepageOverflowRef);

  useEffect(() => {
    const getOpacityValue = () => {
      if (scrollValue >= 300 && scrollValue <= 700) {
        const newOpacity = 1 - (scrollValue - 300) / (700 - 300);
        setOpacity(newOpacity);
      }
    };

    getOpacityValue();
  }, [scrollValue]);

  return (
    <div id="App">
      <div className="homepage">
        <Header homepageOverflowRef={homepageOverflowRef} />
        <img
          src={Background}
          className="background"
          alt=""
          style={{ "--opacity": opacity } as React.CSSProperties}
        />
        <div
          className="homepage__overflow"
          // id="overflowScroll"
          ref={homepageOverflowRef}
        >
          <About />
          <Category />
          <Booking />
          <People />
        </div>
      </div>
    </div>
  );
}

export default App;
