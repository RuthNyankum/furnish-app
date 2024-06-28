import Navbar from "../../components/navbar";
import About from "./components/about";
import Blog from "./components/blog";
import Collection from "./components/collection";
import Hero from "./components/hero";
import Production from "./components/production";
import Services from "./components/services";
import Statistic from "./components/statistic";
import Testimonials from "./components/testimonials";

const LandingPage = () => {
  return (
    <div>
        <Hero />
        <Services />
        <About />
        <Collection />
        <Statistic />
        <Testimonials />
        <Production />
        <Blog />
    </div>
  )
};

export default LandingPage;