import { useEffect, useState } from "react";
import Cards from "./cards";

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
            <h1>Dashboard</h1>
            {products.map(item => {
                const { title, description, images, price } = item
                return <Cards price={price} title={title} description={description} images={images} />
            })}
        </div>
    )


}


export default Dashboard;