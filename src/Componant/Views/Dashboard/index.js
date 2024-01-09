import { useEffect, useState } from "react";
import Cards from "./cards";
import Navbar from "./Navbar";
import Footer from "./Footer";


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
            
            {products.map(item => {
                const { title, description, images, price, id } = item
                return <Cards price={price} title={title} description={description} images={images} id={id} />
            })}
            <Footer/>
        </div>
    )
}
export default Dashboard;








