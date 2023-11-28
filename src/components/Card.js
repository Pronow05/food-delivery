const Card = (props) => {
    return (
        <>
            <div className="w-[250px] font-[Inter] mx-auto">
                <img src = {props.imageUrl} className="mx-auto w-[100%]" alt = "food or restaurant" style={{height:200, width:350}}/>
                <h1 className="text-center font-medium my-2">{props.title}</h1>
            </div>
        </>
    )
}

Card.defaultProps = {
    title : "Some Card",
    imageUrl : "https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg"
}

export default Card;