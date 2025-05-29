import Hero from "./components/Hero";
import Features from "./components/Features";
import NewItems from "./components/NewItems";
import SecondFeatures from "./components/SecondFeatures";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Hero />
      <Features />
      <NewItems />
      <SecondFeatures />
      <Products />
      <Testimonials />
    </div>
  )
}

export default App;