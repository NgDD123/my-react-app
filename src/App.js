import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home/home";
import DeliverTo from './pages/deliver/deliverTo';
import Service from './pages/service/service';
import Search from './pages/search/search';
import Login from './pages/logIn/login';
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from './context/shop-context';
import './index.css';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
             <Route path='/' element={<Home />} />
            <Route path='/deliver-to' element={<DeliverTo />} />
            <Route path='/service' element={<Service/>} />
            <Route path='/search' element={<Search />} />
            <Route path='/login' element={<Login />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;