import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/Cursor/Cursor";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Parallax from "./Components/Parallax/Parallax";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import "./app.scss";

const App = () => {
  return (
    <div>
      {/* <Cursor/> */}
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Projects">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Education">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
