import "./sass/main.scss";

import { useRef } from "react";

import { About } from "./pages/About";
import { Header } from "./pages/Header";

import Background from "../public/assets/images/background.png";

function App() {
  const homepageOverflowRef = useRef<HTMLDivElement>(null);

  return (
    <div id="App">
      <div className="homepage">
        <Header homepageOverflowRef={homepageOverflowRef} />
        <img src={Background} className="background" alt="" />
        <div
          className="homepage__overflow"
          id="overflowScroll"
          ref={homepageOverflowRef}
        >
          <About />
          <div className="a z"></div>
          {/* <div className="b z"></div>
          <div className="c z"></div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
