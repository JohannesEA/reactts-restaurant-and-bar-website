import Home from "./pages/home/Home";
import MenuPage from "./pages/menu/MenuPage";
import GlobalStyle from "./universal/globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meny" element={<MenuPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
