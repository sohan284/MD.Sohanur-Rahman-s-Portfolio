import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import Blogs from './Pages/Blogs/Blogs';
import ProjDetails from './Pages/Home/ProjDetails';
import AboutMe from './Pages/Home/AboutMe';

function App() {
  return (
    <div className='bg-black'>
      <Header></Header>
      <hr />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/aboutMe' element={<AboutMe></AboutMe>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/projDetails/:projectId' element={<ProjDetails></ProjDetails>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
