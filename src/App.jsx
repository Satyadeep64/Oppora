import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Footer from "./components/section1/Footer"
import SplashScreen from "./components/Splash/Splash";
import { useState, useEffect } from "react";
import RoleSelection from "./components/RoleSelection"

const App = () => {
  const [loading,setLoading] = useState(true);


  useEffect(()=>{

    setTimeout(()=>{
      setLoading(false);
    },2000);

  },[]);



  if(loading){
    return <SplashScreen />;
  }

  return(
    <Routes>

      <Route path="/login" element={<Login/>}/>
      <Route path="/"element={<RoleSelection/>}
/>

      <Route element={<Layout/>}>

        <Route path="/home" element={<Home/>}/>
        <Route path="/footer" element={<Footer />}/>

      </Route>

    </Routes>
  )
}

export default App;