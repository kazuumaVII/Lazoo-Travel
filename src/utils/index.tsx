import { useEffect, useRef } from "react";

import ScrollReveal from "scrollreveal";

import { ScrollRevProps } from "../types";

export const ScrollRev = (props: ScrollRevProps) => {
  const { children, className, delay, origin, duration, distance } = props;

  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const sr = ScrollReveal();
    if (sectionRef.current) {
      sr.reveal(sectionRef.current, {
        reset: true,
        delay: delay || 0,
        origin: origin || "bottom",
        duration: duration || 1000,
        distance: distance || "0px",
        easing: "ease-out",
        opacity: 0,
      });
    }
  }, []);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};
