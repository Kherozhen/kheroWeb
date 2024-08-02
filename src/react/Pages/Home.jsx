
import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import ImgBanner from '../../images/banner.jpg';


function Home() {
  return (
    <main>
      <Banner 
        img={ImgBanner}
        alt="Banière"/>
      <About />
      
    </main>
  );
}

export default Home;
