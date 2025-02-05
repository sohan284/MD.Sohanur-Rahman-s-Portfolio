import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./Pages/Shared/Footer/Footer";
import Blogs from "./Pages/Blogs/Blogs";
import AboutMe from "./Pages/Home/AboutMe";
import MotoParts from "./Pages/DetailsProject/MotoParts";
import GroceryShop from "./Pages/DetailsProject/GroceryShop";
import PerfectCouple from "./Pages/DetailsProject/PerfectCouple";
import AsSunnah from "./Pages/DetailsProject/AsSunnah";
import Taskify from "./Pages/DetailsProject/Taskify";
import Pro44 from "./Pages/DetailsProject/44pro";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="bg mx-auto">
      <Header></Header>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        outerStyle={{
          mixBlendMode: 'exclusion',
          border: '3px solid rgba(255, 69, 0, 0.5)',
          boxShadow: '0 0 15px rgba(255, 165, 0, 0.5), inset 0 0 15px rgba(255, 69, 0, 0.5)',
          animation: 'flame 1s ease-in-out infinite alternate'
        }}
        innerStyle={{
          backgroundColor: '#ff4500',
          mixBlendMode: 'exclusion',
          boxShadow: '0 0 10px #ff4500, 0 0 20px #ff4500, 0 0 30px #ff4500',
        }}
      />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/aboutMe" element={<AboutMe></AboutMe>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/project5" element={<Taskify />}></Route>
        <Route path="/project6" element={<Pro44 />}></Route>
        <Route path="/project1" element={<MotoParts></MotoParts>}></Route>
        <Route path="/project2" element={<GroceryShop></GroceryShop>}></Route>
        <Route
          path="/project3"
          element={<PerfectCouple></PerfectCouple>}
        ></Route>
        <Route path="/project4" element={<AsSunnah></AsSunnah>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
