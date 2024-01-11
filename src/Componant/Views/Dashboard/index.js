import { useEffect, useState } from "react";
import Cards from "./cards";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Category from "./Category";
import ScrollToTopButton from "../../../Componant/Topbtn"


function Dashboard() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])


    const getProducts = () => {

        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then(res => {
                setProducts(res.products);
                console.log(res);
            })
    }
    return (
        <div>
             
            <Navbar/>
            <Category/>
            
            {products.map(item => {
                const { title, description, images, price, id } = item
                return <Cards price={price} title={title} description={description} images={images} id={id} />
            })}
            <br></br><br></br>
            <ScrollToTopButton/><br></br>
            <Footer/>
        </div>
    )
}
export default Dashboard;








