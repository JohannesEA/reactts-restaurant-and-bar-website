import Navbar from "../../components/navbar/Navbar";
import About from "./about/About";
import Booking from "./booking/Booking";
import Hero from "./hero/Hero";
import Menu from "./menu/Menu";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Booking />
    </div>
  );
};

export default Home;
