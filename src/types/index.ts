export interface HeaderProps {
  homepageOverflowRef: React.RefObject<HTMLDivElement>;
}

export interface ButtonProps {
  text: string;
  disable?: boolean;
  type?: "button" | "submit" | "reset";
  handleClick?: () => void;
}

export interface ItemBurgerNAvProps {
  name: string;
}

export interface HomepageOverflowRef {
  current: HTMLDivElement | null;
  scrollTop: number;
}

export interface CardProps {
  icon: string;
  title: string;
  subtitle: string;
}

export interface CardDestProps {
  image: string;
  place: string;
  price: string;
  time: number;
}

export interface ItemBooksProps {
  icon: string;
  color: string;
  title: string;
  subtitle: string;
}

export interface ItemFooterProps {
  title: string;
  list: { name: string }[];
}
