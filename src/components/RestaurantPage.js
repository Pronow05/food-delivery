const RestaurantPage = (props) => {
    return (
        <>


            <div className="font-[Inter] w-[80%] md:w-[60%] mx-auto">
                
                <div className="font-[Inter] flex lg:flex-row flex-col gap-5 justify-center lg:justify-between my-10">
                    <h1 className="text-white bg-[#111] px-5 py-2">Website Name/Logo</h1>
                    <div className="flex gap-2 mx-auto lg:mx-0">
                        <h1 className="text-white bg-[#111] px-5 py-2">Location</h1>
                        <input type = "text" id = "search-bar" className="bg-[#D3D3D3] outline-none text-gray px-2 md:px-5 py-2 w-[70%]" placeholder="Search:"/>
                    </div>
                </div>

                <img src = {props.imageUrl} alt = "restaurant" className="mx-auto rounded-md shadow-lg"/>
                <div className="text-center my-10 mx-auto">
                    <h1 className="text-2xl font-bold">{props.restName}</h1>
                    <p className="my-2">{props.restDesc}</p>
                    <div className="flex justify-center gap-10 my-10">
                        <p><span className="font-bold">Category: </span>{props.category}</p>
                        <p><span className="font-bold">Avg. Cost: </span>{props.cost}</p>
                    </div>
                </div>

                <div className="my-10">
                    <h1 className="text-xl font-bold">Menu</h1>
                    {props.menu.map((item) => {
                        return <div className="flex justify-between my-2 items-center border-b-2 py-2">
                            <h1>{item.name}</h1>
                            <div className="flex gap-5 items-center">
                                <p>Rs. {item.price}</p>
                                <button className="text-white bg-black p-2">Add</button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

RestaurantPage.defaultProps = {
    imageUrl : "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    restName : "Restaurant Name",
    restDesc : "culinary artistry meets unparalleled hospitality in a harmonious dance for your senses",
    category : "Some Category",
    cost : "200 for two",
    menu : [
        {'name' : 'Burger', 'price' : 300},
        {'name' : 'Fries', 'price' : 100},
        {'name' : 'Coke', 'price' : 60},
    ]
}

export default RestaurantPage;