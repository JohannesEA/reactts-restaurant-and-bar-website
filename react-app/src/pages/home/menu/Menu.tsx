import { Link } from "react-router-dom";
import { Wrapper } from "./Menu.styles";

const MENU__IMAGES = [
  {
    _id: 1,
    url: "/assets/images/img__cesar.jpg",
  },
  {
    _id: 2,
    url: "/assets/images/img__salmon.jpg",
  },
  {
    _id: 3,
    url: "/assets/images/img__salad.jpg",
  },
  {
    _id: 4,
    url: "/assets/images/img__smoothie.jpg",
  },
  {
    _id: 5,
    url: "/assets/images/img_salad--2.jpg",
  },
  {
    _id: 6,
    url: "/assets/images/img__pancake.jpg",
  },
];

const Menu = () => {
  return (
    <Wrapper id="menu">
      <h1 className="menu__title">Vår Meny</h1>
      <h4 className="menu__text menu__text--primary">
        Vår Menu er utformet med kjærlighet og gode råvarer.
      </h4>
      <p className="menu__text menu__text--secondary">
        Med ståsted i vår moderne tid er våre menyer inspirert av våre forfedres
        matkultur. Minimalt bearbeidet mat er det optimale for oss mennesker og
        et naturlig valg for Paleo. Vi foretrekker kortreiste produkter,
        sesonggrønsaker og økologisk produsert mat; kjøtt, fisk, skalldyr,
        rotfrukter, grønsaker, frukt, nøtter og frø. Med dette som utgangspunkt
        skaper vi nye matopplevelser.
      </p>

      <div className="menu__images-container">
        {MENU__IMAGES.map((image) => (
          <img
            key={image._id}
            className="menu__img"
            src={image.url}
            alt={image.url}
          />
        ))}
      </div>

      <Link className="menu__link" to="/meny">
        <button className="button button--primary menu__button">
          Se Menyen
        </button>
      </Link>
    </Wrapper>
  );
};

export default Menu;
