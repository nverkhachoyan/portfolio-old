import Slider from "../components/Slider";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ReachOut from "../components/ReachOut";
import Footer from "../components/Footer";
import "./Home.css";

function Home(props) {
  return (
    <>
      <Slider />
      <Projects />
      <Skills />
      <ReachOut />
      <Footer />
    </>
  );
}

export default Home;
