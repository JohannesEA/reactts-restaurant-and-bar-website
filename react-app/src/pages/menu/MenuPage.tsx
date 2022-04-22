import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Footer from "../../components/footer/Footer";
import MenuItemBox from "../../components/menu-item-box/MenuItemBox";
import MenuNavbar from "../../components/navbar/MenuNavbar";
import { ScrollToTop } from "../../universal/Functions";
import { Wrapper } from "./MenuPage.styles";

const MENU__MAIN__COURSES = [
  {
    _id: 1,
    url: "/assets/images/img__cesar.jpg",
    title: "Cæsar salat",
    desc: "Fantastisk fresh cæsarsalat med kylling og masse digg.",
    price: 150,
    alergies: "gluten",
  },
  {
    _id: 2,
    url: "/assets/images/img__salmon.jpg",
    title: "Norsk laks",
    desc: "Fantastisk fresh laks med digge grønnsaker",
    price: 180,
    alergies: "",
  },
  {
    _id: 3,
    url: "/assets/images/img__salad.jpg",
    title: "Kokkens salat",
    desc: "Fantastisk fresh salat med alt du elsker",
    price: 200,
    alergies: "gluten, laktose",
  },
  {
    _id: 4,
    url: "/assets/images/img__smoothie.jpg",
    title: "Smoothie",
    desc: "Fantastisk Smoothie med ferske bær",
    price: 80,
    alergies: "bær",
  },
  {
    _id: 5,
    url: "/assets/images/img_salad--2.jpg",
    title: "Salat 2",
    desc: "Salat for influensere. Smaker ikke godt, men er fin å se på.",
    price: 390,
    alergies: "gluten",
  },
  {
    _id: 6,
    url: "/assets/images/img__pancake.jpg",
    title: "Pannekaker",
    desc: "Digge pannekaker med masse digg",
    price: 150,
    alergies: "gluten, laktose, bær",
  },
];

const MENU__MAIN__DESERTS = [
  {
    _id: 1,
    url: "/assets/images/cake2.jpg",
    title: "Sjokoladekake med bær",
    desc: "Fresh Sjokoladekake med bær.",
    price: 120,
    alergies: "gluten, lakstose, bær, egg",
  },
  {
    _id: 2,
    url: "/assets/images/chocolate-cake.jpg",
    title: "Sjokoladekake",
    desc: "Sjokoladekake med flytende innhold.",
    price: 180,
    alergies: "gluten, egg, laktose",
  },
  {
    _id: 3,
    url: "/assets/images/cl.jpg",
    title: "Sjokolademousse",
    desc: "Husets Sjokolademousse for deg som elsker sjokolade.",
    price: 200,
    alergies: "gluten, laktose, egg",
  },
  {
    _id: 4,
    url: "/assets/images/img__smoothie.jpg",
    title: "Smoothie",
    desc: "Fantastisk Smoothie med ferske bær",
    price: 80,
    alergies: "bær",
  },
  {
    _id: 5,
    url: "/assets/images/img__pancake.jpg",
    title: "Pannekaker",
    desc: "Digge pannekaker",
    price: 100,
    alergies: "gluten, laktose",
  },
  {
    _id: 6,
    url: "/assets/images/smoothie.jpg",
    title: "Jordbær-smoothie",
    desc: "Smoothie med jordbær og banan",
    price: 80,
    alergies: "bær",
  },
];

const MENU__DRINKS = [
  {
    _id: 1,
    url: "/assets/images/coffe.jpg",
    title: "Espresso",
    desc: "",
    price: 30,
    alergies: "gluten",
  },
  {
    _id: 2,
    url: "/assets/images/coffe1.jpg",
    title: "Cappuccino",
    desc: "",
    price: 40,
    alergies: "laktose",
  },
  {
    _id: 3,
    url: "/assets/images/coffe2.jpg",
    title: "Latte",
    desc: "",
    price: 34,
    alergies: "aktose",
  },
  {
    _id: 4,
    url: "/assets/images/coffe3.jpg",
    title: "Spesial kaffe",
    desc: "",
    price: 80,
    alergies: "",
  },
  {
    _id: 5,
    url: "/assets/images/drink.jpg",
    title: "Husets Drink",
    desc: "",
    price: 100,
    alergies: "",
  },
  {
    _id: 6,
    url: "/assets/images/drink2.jpg",
    title: "Husets drink 2",
    desc: "",
    price: 150,
    alergies: "",
  },
  {
    _id: 7,
    url: "/assets/images/ice__tea.jpg",
    title: "Iste",
    desc: "",
    price: 40,
    alergies: "gluten, laktose, bær",
  },
  {
    _id: 6,
    url: "/assets/images/water.jpg",
    title: "Vann",
    desc: "",
    price: 12,
    alergies: "",
  },
];

const MenuPage = () => {
  ScrollToTop();
  return (
    <>
      <MenuNavbar />
      <Link
        className="fab__btn"
        to="hero"
        spy={true}
        smooth={true}
        offset={-100}
        duration={300}
      >
        <BsFillArrowUpSquareFill size={35} color="var(--color--secondary)" />
      </Link>
      <Wrapper>
        <h3 className="menupage__title">Hovedretter</h3>
        <div id="hero" className="menu__main-container">
          {MENU__MAIN__COURSES.map((item) => (
            <MenuItemBox item={item} />
          ))}
        </div>
        <h3 className="menupage__title">Desserter</h3>
        <div id="second" className="menu__second-container">
          {MENU__MAIN__DESERTS.map((item) => (
            <MenuItemBox item={item} />
          ))}
        </div>
        <h3 id="third" className="menupage__title">
          Drikke
        </h3>
        <div className="menu__third-container">
          {MENU__DRINKS.map((item) => (
            <MenuItemBox item={item} />
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default MenuPage;
