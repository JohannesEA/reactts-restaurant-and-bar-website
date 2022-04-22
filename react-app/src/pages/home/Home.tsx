import Navbar from "../../components/navbar/Navbar";
import About from "./about/About";
import Booking from "./booking/Booking";
import Hero from "./hero/Hero";
import Menu from "./menu/Menu";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div>
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

      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Booking />
    </div>
  );
};

export default Home;
