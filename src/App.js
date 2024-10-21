import { Route, Routes } from "react-router-dom";
import "./App.css";
import Portfolio from "./Pages/Portfolio";
import Video from "./Pages/Video";
import ClientAlbum from "./Pages/ClientAlbum";
import Bio from "./Pages/Bio";
import Navbar from "./Components/Nav";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import CommonPortfolio from "./Components/Common/CommonPortfolio";
import { Path } from "./Components/Common/CommonComponent";
import ScrollToTop from "./Components/ScrollTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/video" element={<Video />} />
        <Route path="/client-album" element={<ClientAlbum />} />
        <Route path="/bio" element={<Bio />} />
        {Path.map(item => (
          <Route path={`/portfolio/${item}`} element={<CommonPortfolio />} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
