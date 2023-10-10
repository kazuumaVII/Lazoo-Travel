import { useState, useEffect, RefObject } from "react";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    if (mediaQuery.matches !== matches) {
      setMatches(mediaQuery.matches);
    }

    const listener = () => {
      setMatches(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", listener);

    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, [query, matches]);

  return matches;
};

export const useActiveSection = (
  homepageOverflowRef: RefObject<HTMLElement>
) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = homepageOverflowRef.current?.scrollTop || 0;

      const sections =
        homepageOverflowRef.current?.querySelectorAll("section") || [];
      const navLinks = document.querySelectorAll(".header__nav a");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        const sectionBottom = sectionTop + section.offsetHeight;
        const navLink = document.querySelector(
          `.header__nav a[data-scroll="${section.id}"]`
        );

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);

          if (navLink) {
            navLinks.forEach((link) => link.classList.remove("active"));
            navLink.classList.add("active");
          }
        }
      });
    };

    if (homepageOverflowRef.current) {
      homepageOverflowRef.current.addEventListener("scroll", handleScroll);
      return () =>
        homepageOverflowRef.current?.removeEventListener(
          "scroll",
          handleScroll
        );
    }
  }, [homepageOverflowRef]);

  return activeSection;
};

export const useScrollPosition = (ref: RefObject<HTMLDivElement>) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const homepageOverflowDiv = ref.current;
      if (homepageOverflowDiv) {
        const newScrollPosition = homepageOverflowDiv.scrollTop;
        setScrollPosition(newScrollPosition);
      }
    };

    const homepageOverflowDiv = ref.current;
    if (homepageOverflowDiv) {
      homepageOverflowDiv.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (homepageOverflowDiv) {
        homepageOverflowDiv.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return scrollPosition;
};
