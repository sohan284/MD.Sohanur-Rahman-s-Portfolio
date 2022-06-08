import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className='bg-black'>
      <Header></Header>
      <hr />
      <Routes>
<Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
