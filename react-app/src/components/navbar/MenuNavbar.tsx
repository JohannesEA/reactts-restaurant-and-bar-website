import { Wrapper } from "./Navbar.styles";
import { Link as Domlink } from "react-router-dom";
import useWindowDimensions from "../../universal/Functions";
import { useState } from "react";
import { Link } from "react-scroll";

const MenuNavbar = () => {
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
            <Domlink to="/">
              <p className="navbar__link">HJEM</p>
            </Domlink>
            <Link
              to="main"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              <p className="navbar__link">HOVEDRETTER</p>
            </Link>
            <Link
              to="second"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              <p className="navbar__link">DESSERTER</p>
            </Link>
            <Link
              to="third"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              <p className="navbar__link">DRIKKE</p>
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
          <Domlink to="/">
            <p className="navbar__link">HJEM</p>
          </Domlink>
          <Link to="main" spy={true} smooth={true} offset={-100} duration={300}>
            <p className="navbar__link">HOVEDRETTER</p>
          </Link>
          <Link
            to="second"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            <p className="navbar__link">DESSERTER</p>
          </Link>
          <Link
            to="third"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            <p className="navbar__link">DRIKKE</p>
          </Link>
        </div>
      )}
    </Wrapper>
  );
};

export default MenuNavbar;
