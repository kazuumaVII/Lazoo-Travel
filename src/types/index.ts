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
  index: number;
  icon: string;
  title: string;
  subtitle: string;
}

export interface CardDestProps {
  index: number;
  image: string;
  place: string;
  price: string;
  time: number;
}

export interface ItemBooksProps {
  index: number;
  icon: string;
  color: string;
  title: string;
  subtitle: string;
}

export interface ItemFooterProps {
  title: string;
  list: { name: string }[];
}

export interface ScrollRevProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  origin?: string;
  duration?: number;
  distance?: string;
}
