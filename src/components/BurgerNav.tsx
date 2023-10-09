import { ItemBurgerNAvProps } from "../types";

export const BurgerNav = () => {
  const Item = (props: ItemBurgerNAvProps) => {
    const { name } = props;
    return (
      <li>
        <a href="#">
          <hr className="top" />
          {name}
          <hr className="bottom" />
        </a>
      </li>
    );
  };

  const names = [
    "Destination",
    "Hotels",
    "Flights",
    "Bookings",
    "Login",
    "Sign up",
  ];

  return (
    <div className="mainNavBurger">
      <input className="checkbox" type="checkbox" name="" id="" />
      <div className="containerBlur"></div>
      <div className="hamburgerLines">
        {Array.from(Array(3)).map((_, index) => (
          <span key={index} className={`line line${index + 1}`}></span>
        ))}
      </div>
      <div className="containerItems">
        {names.map((name, index) => (
          <Item key={index} name={name} />
        ))}
      </div>
    </div>
  );
};
