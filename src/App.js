import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from "./components/navbar";
import Home from './pages/home/home';
import AllCategory from './pages/AllCategories/Allcategory';
import Search from './pages/search/search';
import Login from './pages/logIn/login';
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact/contact";
import { Cart } from "./pages/cart/cart";
import Electronics from './pages/categories/electronics';
import Property from './pages/categories/property';
import Jobs from './pages/categories/Jobs'; 
import AutomotiveVehicles from './pages/categories/AutomotiveVehicles';
import Services from './pages/categories/Services';
import BoatsWatercraft from './pages/categories/BoatsWatercraft';
import MoreCategories from './pages/categories/MoreCategories';
import { ShopContextProvider } from './context/shop-context';
import './index.css';
import Checkout from './components/checkout/checkout';
import Footer from './components/Footer/footer';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/allcategory' element={<AllCategory/>} />
            <Route path='/search' element={<Search />} />
            <Route path='/login' element={<Login />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path='/electronics' element={<Electronics />} />
            <Route path='/property' element={<Property />} />
            <Route path='/jobs' element={<Jobs />} />
            <Route path='/automotive-vehicles' element={<AutomotiveVehicles />} />
            <Route path='/services' element={<Services />} />
            <Route path='/boats-watercraft' element={<BoatsWatercraft />} />
            <Route path='/more-categories' element={<MoreCategories />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;