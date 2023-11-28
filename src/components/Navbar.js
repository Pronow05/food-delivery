import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from "../LandingPage";
import Login from "../Login";
import SignUp from "../Signup";
import RestaurantPage from "./RestaurantPage";
import AboutUs from './AboutUs';
import Cart from './Cart';
import MyOrders from './MyOrders'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    //const handleLogout = ()=>{

    //};

    return (
        <Router>
            
            <div className="font-[Inter] text-md font-medium border-b-2">
                <nav className="list-none flex flex-row justify-center md:justify-end items-center gap-10 px-5 py-2 text-center">
                    <Link to="/">Home</Link>
                    <Link to="/createuser">SignUp</Link>
                    <Link to="/login" className="text-white bg-[#111] px-5 py-2 rounded-md">Login</Link>
                            
                    
                    
                    <div className="menu-icon" onClick={toggleMenu}>
                        <MenuIcon />
                    </div>
                </nav>
            </div>

            {menuOpen && (
                <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform translate-x-0 transition-transform duration-300">
                    <div className="h-full flex flex-col justify-center text-center">
                        <ul className="space-y-2">
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/my-orders">My Orders</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                        </ul>
                    </div>
                    <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            )}
            <Routes>
                <Route  path="/" exact element={<LandingPage />} />
                <Route  path="/createuser" exact element={<SignUp />} />
                <Route  path="/login" exact element={<Login />} />
                <Route  path="/restaurant/:id" exact element={<RestaurantPage />} />
				<Route  path="/restaurant/mcd" exact element={<RestaurantPage restName='Mc Donalds' restDesc="McDonalds is a very nice place" />} />
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/my-orders" element={<MyOrders/>}/>
            </Routes>
        </Router>
    );
}

export default Navbar;
