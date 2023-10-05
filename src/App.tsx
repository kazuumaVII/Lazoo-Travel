import { Header } from "./pages/Header";
import "./sass/main.scss";
import { useRef } from "react";

function App() {
  const homepageOverflowRef = useRef<HTMLDivElement>(null);

  return (
    <div id="App">
      <div className="homepage">
        <Header homepageOverflowRef={homepageOverflowRef} />
        <div
          className="homepage__overflow"
          id="overflowScroll"
          ref={homepageOverflowRef}
        ></div>
      </div>
    </div>
  );
}

export default App;
