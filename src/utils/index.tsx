import { useEffect, useRef } from "react";

import ScrollReveal from "scrollreveal";

import { ScrollRevProps } from "../types";

export const ScrollRev = (props: ScrollRevProps) => {
  const { children, className, delay, origin, duration, distance } = props;

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sr = ScrollReveal({
      container: document.querySelector(".homepage__overflow"),
    });
    if (sectionRef.current) {
      sr.reveal(sectionRef.current, {
        reset: true,
        delay: delay || 0,
        origin: origin || "bottom",
        duration: duration || 1000,
        distance: distance || "0px",
        easing: "ease-out",
        opacity: 0,
        mobile: false,
      });
    }
  }, []);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};
