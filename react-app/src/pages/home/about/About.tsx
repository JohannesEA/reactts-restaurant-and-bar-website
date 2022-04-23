import { Link } from "react-scroll";
import { Wrapper } from "./About.styles";

const About = () => {
  return (
    <Wrapper id="about">
      <img
        className="about__img"
        src="/assets/images/img__bar--2.jpg"
        alt="Introduction screen for about section"
      />
      <div className="about__text-and-button-container">
        <h1 className="about__title">Om Oss</h1>
        <p className="about__text">
          Menneskekroppen er et finstemt maskineri. Ikke minst er maten vi
          spiser viktig for at den skal fungere optimalt. I vår industrialiserte
          verden kan det by på noen utfordringer, derfor har Brasserie Paleo
          valgt å hente inspirasjon fra den gang naturen var uberørt og
          menneskene levde som jegere og fiskere. Velkommen til rene, ekte og
          nyskapende matopplevelser.
        </p>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={300}
        >
          <button className="button button--primary about__button">
            Kontakt Oss
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default About;
