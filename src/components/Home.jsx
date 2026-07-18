import { useEffect, useState } from "react";
import SplashScreen from "../components/Splash/Splash";
import Hero from "./section1/Hero";
import Opportunities from "./Opportunities";
import FeaturedData from "./FeaturedSlider/FeaturedSlider"
import Stats from "./PlatformStats"
import Ai from "./AiTools/Aitool"
const Home = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {

            setLoading(false);

        }, 3000);

        return () => clearTimeout(timer);

    }, []);

    if (loading) {

        return <SplashScreen />;

    }



  return(
    <>


    <div>
      <Hero />
      <FeaturedData />
      <Opportunities/>
      <Ai/>
      <Stats/>
      
      </div>
    </>
  )
}

export default Home;