import { ButtonProps } from "../types";

export const ButtonBubble = (props: ButtonProps) => {
  const { text } = props;

  return (
    <button className="mainButtonBubble">
      <span className="circle1"></span>
      <span className="circle2"></span>
      <span className="circle3"></span>
      <span className="circle4"></span>
      <span className="circle5"></span>
      <span className="text">{text}</span>
    </button>
  );
};
