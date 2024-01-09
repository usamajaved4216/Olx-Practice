import { useEffect, useState } from "react";
import Cards from "./cards";
import olx from '../../../olx.svg'
import olxtop from '../../../olx top.svg'
import car from "../../../car-front.svg";
import building from "../../../building.svg";
import search from "../../../search.svg";



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
                    
                <img style={{width:40,marginLeft:40,}} src={olxtop} ></img>

                <img style={{marginLeft:'2rem'}} src={car} ></img>
                    <p> MOTORS </p>
                    <img style={{marginLeft:'2rem'}} src={building} ></img>
                    <p > PROPERTY </p>
                </div>
                <div style={{display:"flex", paddingLeft:'2rem', paddingBottom:10}}>
                    <img style={{width:60,}} src={olx} ></img>
                    <input   style={{width:'16rem', height:'2.3rem',marginLeft:20, marginTop:6, border: '2px solid black', borderRadius:5}}  placeholder =  "Pakistan" ></input>
                    
                    <input style={{width:'40rem', height:'2.3rem', marginLeft:18, marginTop:6, border: '2px solid black', borderRadius:5,}}placeholder="Find Cars, Mobile Phones and more..." ></input>
                    <img  style={{background:'black', width:50, height:45, marginTop:5, borderRadius:5 }} src={search} ></img>
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








