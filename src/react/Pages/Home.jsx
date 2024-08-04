
import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import ImgBanner from '../../images/banner.jpg';
import Projects from "../Components/Projects/Projects";


function Home() {
  return (
    <main>
      <Banner 
        img={ImgBanner}
        alt="Banière"/>
      <About />
      
      <div className="projectsContainer">
        <h2>Projets réalisés</h2>
        <Projects />
      </div>
      
      
    </main>
  );
}

export default Home;
