import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/molecules";
import { Footer } from "./components/organisms";
import { Home, AboutUs } from "./pages";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer className="-mt-35" />
    </>
  );
}

export default App;
