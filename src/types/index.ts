export interface HeaderProps {
  homepageOverflowRef: React.RefObject<HTMLDivElement>;
}

export interface ButtonProps {
  text: string;
}

export interface ItemBurgerNAvProps {
  name: string;
}

export interface HomepageOverflowRef {
  current: HTMLDivElement | null;
  scrollTop: number;
}
