import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import Blogs from './Pages/Blogs/Blogs';
import AboutMe from './Pages/Home/AboutMe';
import MotoParts from './Pages/DetailsProject/MotoParts';
import GroceryShop from './Pages/DetailsProject/GroceryShop';
import PerfectCouple from './Pages/DetailsProject/PerfectCouple';
import AsSunnah from './Pages/DetailsProject/AsSunnah';

function App() {
  return (
    <div className='bg mx-auto'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/aboutMe' element={<AboutMe></AboutMe>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/project1' element={<MotoParts></MotoParts>}></Route>
        <Route path='/project2' element={<GroceryShop></GroceryShop>}></Route>
        <Route path='/project3' element={<PerfectCouple></PerfectCouple>}></Route>
        <Route path='/project4' element={<AsSunnah></AsSunnah>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
