import { sponsorsData } from "../static";

import { ButtonBubble } from "../components/Button";
import { ScrollRev } from "../utils";

import Mask1 from "../../public/assets/images/contactMask.svg";
import MouseSend from "../../public/assets/icons/mouseSend.svg";
import IconInput from "../../public/assets/icons/iconInput.svg";
import { useState } from "react";

export const Contact = () => {
  const [isChecking, setIsChecking] = useState(false);
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState<null | "valid" | "invalid">(
    null
  );
  const [isActiveCard, setIsActiveCard] = useState(false);

  const isValidEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleEmailCheck = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      setIsActiveCard(true);

      if (isValidEmail(email)) {
        setEmailStatus("valid");
        setEmail("");
      } else {
        setEmailStatus("invalid");
      }

      setTimeout(() => {
        setIsActiveCard(false);
      }, 2000);
    }, 3000);
  };

  return (
    <section className="mainContact" id="Contact">
      <div className="containerSponsorsList">
        {sponsorsData.map((item, index) => (
          <ScrollRev
            className="containerSponsor"
            delay={300 * (index + 1)}
            key={index}
          >
            <img src={item.img} alt="" key={index} />
          </ScrollRev>
        ))}
      </div>
      <div className="containerContact">
        <div className="wrapper">
          <img className="mask1Svg maskSvg" src={Mask1} alt="" />
          <img className="mask2Svg maskSvg" src={Mask1} alt="" />

          <ScrollRev delay={800} origin={"bottom"} distance="70px">
            <h2>
              Subscribe to get information, latest news and other interesting
              offers about Lazoo
            </h2>
          </ScrollRev>

          <form className="containerForm" onSubmit={handleEmailCheck}>
            <ScrollRev className="containerInput" delay={500}>
              <span className="containerIcon">
                <div
                  className={`wrapperLoader ${
                    isChecking ? "wrapperLoaderActive" : "style"
                  } `}
                >
                  <span className="loader"></span>
                </div>

                <img
                  className={`${isChecking ? "iconInactive" : ""} `}
                  src={IconInput}
                  alt=""
                />
              </span>
              <input
                type="text"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </ScrollRev>

            <ButtonBubble
              type={"submit"}
              text="Subscribe"
              disable={!email ? true : isChecking ? true : false}
            />
          </form>
        </div>
        <span className="containerSend">
          <img src={MouseSend} alt="" />
        </span>
        <div
          className={`containerFormResponse ${emailStatus} ${
            isActiveCard ? "active" : "disable"
          } `}
        >
          <p>{emailStatus === "invalid" ? "Invalid Email" : "Email Sent"}</p>
        </div>
      </div>
    </section>
  );
};
