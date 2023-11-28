import React from "react";
import Card from "./components/Card";
import Mcd from './images/McD.jpg';
import KFC from './images/KFC Kentucky Fried Chicken.png';
import empire from './images/empire.png';
import meghana from './images/meghana.png';
import pastaStreet from './images/pastaStreet.jpeg';
import pizza from './images/pizza.jpg';
import pasta from './images/pasta.jpg';
import biryani from './images/biryani.webp';
import shawarma from './images/shawrma.jpg'

import { Link } from "react-router-dom";


const LandingPage = () => {
    return (
        <>
            
            <div className="font-[Inter]">

                <div className="flex md:flex-row flex-col gap-5 justify-center md:justify-between my-10 mx-5">
                    <h1 className="text-white bg-[#111] px-5 py-2">Quick Bites</h1>
                    <div className="flex gap-2">
                        <h1 className="text-white bg-[#111] px-5 py-2">Location</h1>
                        <input type = "text" id = "search-bar" className="bg-[#D3D3D3] outline-none text-gray px-3 md:px-5 py-2" placeholder="Search:"/>
                    </div>
                </div>

                <div id = "food-types-container" className="my-10 mx-5">
                    <h1 className="rounded-md font-medium text-2xl py-2 px-5 border-2 border-[#D3D3D3] w-[50%] lg:w-[20%] mx-auto lg:mx-0 text-center">Food Item Categories</h1>
                    <div className="lg:ml-20 text-center my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-5 items-center">
                        <Card title = "Burger" />
                        <Card title = "Pizza" imageUrl = {pizza}/>
                        <Card title = "Pasta" imageUrl = {pasta}/>
                        <Card title = "Biryani" imageUrl = {biryani}/>
                        <Card title = "Shawarma" imageUrl = {shawarma}/>
                    </div>
                </div>

                <div id="restaurants-container" className="my-10 mx-5">
                    <h1 className="rounded-md font-medium text-2xl py-2 px-5 border-2 border-[#D3D3D3] w-[50%] lg:w-[20%] mx-auto lg:mx-0 text-center">Restaurants</h1>
                    <div className="lg:ml-20 text-center my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-5 items-center">
                        <Link to="/restaurant/mcd">
                            <Card title = "McDonalds" imageUrl = {Mcd} />
                        </Link>
                        <Link to="/restaurant/kfc">
                            <Card title = "KFC" imageUrl = {KFC}/>
                        </Link>
                        <Link to="/restaurant/empire">
                            <Card title = "Empire" imageUrl = {empire}/>
                        </Link>
                        <Link to="/restaurant/4">
                            <Card title = "Meghana Foods" imageUrl = {meghana}/>
                        </Link>
                        <Link to="/restaurant/5">
                            <Card title = "Pasta Street" imageUrl = {pastaStreet}/>
                        </Link>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default LandingPage;