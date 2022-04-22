import { Wrapper } from "./Hero.styles";

const Hero = () => {
  return (
    <Wrapper id="hero">
      <img
        className="hero__img"
        src="/assets/images/img__salad.jpg"
        alt="Introduction image for welcome section"
      />

      <div className="hero__text-and-button-container">
        <h1 className="hero__title">Velkommen</h1>
        <p className="hero__text">
          Med gull, brunt og sort som tema i kombinasjon med luftig takhøyde.
          Unik, sofistikert og moderne - men samtidig uformell -
          restaurantopplevelse.
        </p>
        <button className="button button--primary hero__button">
          Bestill bord
        </button>
      </div>
    </Wrapper>
  );
};

export default Hero;
