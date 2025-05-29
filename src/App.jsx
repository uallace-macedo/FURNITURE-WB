import { Element } from "react-scroll";

import Hero from "./components/Hero";
import Features from "./components/Features";
import NewItems from "./components/NewItems";
import SecondFeatures from "./components/SecondFeatures";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white scroll-smooth">
      <Header />
      <Element name="home"> <Hero /> </Element>
      <Element name="features"> <Features /> </Element>
      <NewItems />
      <SecondFeatures />
      <Products />
      <Element name="about"> <Testimonials /> </Element>
      <Element name="contact"> <Newsletter /> </Element>
      <Footer />
    </div>
  )
}

export default App;