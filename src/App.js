import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import Hardware from './Pages/Hardware';
import Software from './Pages/Software';
import software_banner from './Components/Assets/banner-30.png';
import hardware_banner from './Components/Assets/banner-20.png';
import other_banner from './Components/Assets/banner-10.png';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/hardware' element={<ShopCategory banner={hardware_banner} category="hardware product"/>}/>
        <Route path='/software' element={<ShopCategory banner={software_banner}/>} category="software product"/>
        <Route path='/hardware' element={<Hardware/>}/>
        <Route path='/software' element={<Software/>}/>
        <Route path='/other product' element={<ShopCategory banner={other_banner} category="other product"/>}/>
        <Route path="/product" element={<Product/>}/>
          <Route path=':productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
