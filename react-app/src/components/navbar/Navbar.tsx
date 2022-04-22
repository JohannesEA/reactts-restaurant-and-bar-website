import { Wrapper } from "./Navbar.styles";
import useWindowDimensions from "../../universal/Functions";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <div className="navbar__inner-container">
        <img
          className="navbar__logo"
          src="/assets/logos/logo1.png"
          alt="navbar logo"
        />

        {width > 800 ? (
          <div className="navbar__menu">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              <p className="navbar__link">HJEM</p>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              <p className="navbar__link">OM</p>
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              <p className="navbar__link">MENY</p>
            </Link>
            <Link
              to="booking"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              <p className="navbar__link">BOOKING</p>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              <p className="navbar__link">KONTAKT</p>
            </Link>
          </div>
        ) : (
          <div className="navbar__menu">
            {!isOpen ? (
              <p className="navbar__link" onClick={() => setIsOpen(!isOpen)}>
                MENY
              </p>
            ) : (
              <p className="navbar__link" onClick={() => setIsOpen(!isOpen)}>
                LUKK
              </p>
            )}
          </div>
        )}
      </div>

      {width < 800 && (
        <div
          className={
            !isOpen
              ? "navbar__menu--responsive"
              : "navbar__menu--responsive navbar__menu--responsive--active"
          }
        >
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={300}>
            <p className="navbar__link">HJEM</p>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            <p className="navbar__link">OM</p>
          </Link>
          <Link to="menu" spy={true} smooth={true} offset={-100} duration={300}>
            <p className="navbar__link">MENY</p>
          </Link>
          <Link
            to="booking"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            <p className="navbar__link">BOOKING</p>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            <p className="navbar__link">KONTAKT</p>
          </Link>
        </div>
      )}
    </Wrapper>
  );
};

export default Navbar;
