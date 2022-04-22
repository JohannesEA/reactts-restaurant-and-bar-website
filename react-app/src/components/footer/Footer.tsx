import { Wrapper } from "./Footer.styles";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GiPositionMarker } from "react-icons/gi";

const Footer = () => {
  return (
    <Wrapper id="contact">
      <div className="footer__inner-container">
        <div className="footer__main-container-container">
          <div className="footer__item-container">
            <h4 className="footer__text footer__title">KONTAKT OSS</h4>
            <div className="footer__contact-item">
              <AiOutlinePhone className="footer__text" fontSize={30} />
              <p className="footer__text">+47 99509035</p>
            </div>
            <div className="footer__contact-item">
              <AiOutlineMail className="footer__text" fontSize={30} />
              <p className="footer__text">post@gmail.com</p>
            </div>
            <div className="footer__contact-item">
              <GiPositionMarker className="footer__text" fontSize={30} />
              <p className="footer__text">Sven Bruns Gate 2</p>
            </div>
          </div>
          <div className="footer__item-container">
            <img
              className="footer__logo"
              src="/assets/logos/logo1.png"
              alt="Footer logo"
            />
          </div>
          <div className="footer__item-container footer__item-container--social">
            <BsFacebook
              className="footer__text footer__social-icon"
              fontSize={30}
            />
            <BsInstagram
              className="footer__text footer__social-icon"
              fontSize={30}
            />
            <BsLinkedin
              className="footer__text footer__social-icon"
              fontSize={30}
            />
          </div>
        </div>

        <p className="footer__text copywight">Copyright sbg2.no 2022</p>
      </div>
    </Wrapper>
  );
};

export default Footer;
