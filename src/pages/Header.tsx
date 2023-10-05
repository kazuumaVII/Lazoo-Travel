import { Navbar } from "../components/Navbar";

import { HeaderProps } from "../types";

export const Header = (props: HeaderProps) => {
  const { homepageOverflowRef } = props;

  return (
    <div className="mainHeader">
      <Navbar homepageOverflowRef={homepageOverflowRef} />
    </div>
  );
};
