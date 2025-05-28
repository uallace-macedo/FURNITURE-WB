import Hero from "./components/Hero";
import Features from "./components/Features";
import NewItems from "./components/NewItems";
import SecondFeatures from "./components/SecondFeatures";

function App() {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Hero />
      <Features />
      <NewItems />
      <SecondFeatures />
    </div>
  )
}

export default App;