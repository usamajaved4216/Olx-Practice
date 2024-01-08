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
             <div style={{ height: '7rem', }}></div>
            <nav style={{backgroundColor: "rgb(241, 239, 239)", position: "fixed", top: 0, width: "100%"}}>
                <div style={{display:"flex"}}>
                    
                    <p> MOTORS </p>
                    <p> PROPERTY </p>
                </div>
                <div style={{display:"flex", paddingLeft:'8.5rem', paddingBottom:10}}>
                    <input style={{width:'16rem', height:'2.5rem'}}  placeholder="search" ></input>
                    <input style={{width:'40rem', height:'2.5rem', marginLeft:18 }}placeholder="Find Cars, Mobile Phones and more..." ></input>
                </div>
                
                    
            </nav>
            <div style={{display:"flex", borderBottom: '1px solid rgb(191, 189, 189)', padding:'15px'}}>
                <p style={{ margin: "0 8px" }}>ALL catogary</p>
                <p style={{ margin: "0 8px" }}> Mobile Phones</p>
                <p style={{ margin: "0 8px" }}>Car</p>
                <p style={{ margin: "0 8px" }}>Motorscycle</p>
                <p style={{ margin: "0 8px" }}>Houses</p>
                <p style={{ margin: "0 8px" }}>Video-Audios</p>
                <p style={{ margin: "0 8px" }}>Tablets</p>
                <p style={{ margin: "0 8px" }}>Land&Plots</p>

            </div>
            <br/>
            {products.map(item => {
                const { title, description, images, price } = item
                return <Cards price={price} title={title} description={description} images={images} />
            })}
        </div>
    )
}
export default Dashboard;








