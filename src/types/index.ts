export interface HeaderProps {
  homepageOverflowRef: React.RefObject<HTMLDivElement>;
}

export interface HomepageOverflowRef {
  current: HTMLDivElement | null;
  scrollTop: number;
}
