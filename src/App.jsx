import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Footer from "./components/section1/Footer"

const App = () => {

  return(
    <Routes>

      <Route path="/login" element={<Login/>}/>

      <Route element={<Layout/>}>

        <Route path="/" element={<Home/>}/>
        <Route path="/footer" element={<Footer />}/>

      </Route>

    </Routes>
  )
}

export default App;