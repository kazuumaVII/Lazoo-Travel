import { ItemFooterProps } from "../types";

import {
  footerCompanyData,
  footerContactData,
  footerMoreData,
  footerStoreData,
} from "../static";

import Logo from "../../public/assets/images/logo2.svg";
import GooglePlay from "../../public/assets/images/googlePlay.svg";
import AppleStore from "../../public/assets/images/appleStore.svg";

const ItemFooter = (props: ItemFooterProps) => {
  const { title, list } = props;

  return (
    <div className="mainItemFooter">
      <h5 className="title">{title}</h5>
      <div className="containerList">
        {list.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </div>
    </div>
  );
};

const ItemStore = (props: { img: string }) => {
  const { img } = props;
  return (
    <span>
      <img src={img} alt="" />
    </span>
  );
};

export const Footer = () => {
  return (
    <div className="mainFooter">
      <div className="containerInfoFooter">
        <div className="containerLogo">
          <img src={Logo} alt="" />
          <p>Book your trip in minute, get full Control for much longer.</p>
        </div>
        <div className="containerMiddle">
          <ItemFooter title="Company" list={footerCompanyData} />
          <ItemFooter title="Contact" list={footerContactData} />
          <ItemFooter title="More" list={footerMoreData} />
        </div>
        <div className="containerApp">
          <div className="containerMediaList">
            {footerStoreData.map((item, index) => (
              <ItemStore img={item.img} key={index} />
            ))}
          </div>
          <h5>Discover our app</h5>
          <div className="containerStoreList">
            <img src={GooglePlay} alt="" />
            <img src={AppleStore} alt="" />
          </div>
        </div>
      </div>
      <h4>All rights reserved@jadoo.co</h4>
    </div>
  );
};
