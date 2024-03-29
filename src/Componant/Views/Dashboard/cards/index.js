import { useNavigate } from 'react-router-dom';
import heart from '../../../../heart.svg'


function Cards(props) {
    const { title, description, images, price, id }= props;
    const navigate = useNavigate()
    const HandleCardPress = (e) => {
        navigate(`/DetailScreen/${id}`, {state: e})
    }
    return (
        
        <div  style={{display:"inline-flex", }}>
        <div onClick={() => HandleCardPress(props) }  style={{borderRadius: 10,height:380, border: '1px solid rgb(191, 189, 189)', margin:10, cursor:'pointer'}}>
            <img style={{width: 300, height: 200, borderRadius:10, borderBottom: '1px solid rgb(191, 189, 189)'}} src={images[0]} className="card-img-top" alt="alt"/>
                <div style={{width:300, textAlign:"left", marginTop:-10 }}>
                    {/* <div style={{display:'flex', }}> */}
                    <h3 style={{paddingLeft:10}}> ${price}  <img   src={heart} style={{paddingLeft:'12.5rem'}} ></img></h3>
                  
                    {/* </div> */}
                    <p style={{fontWeight:'bold', paddingLeft:10 }}>{title}</p>
                    <p style={{fontSize: 15, paddingLeft:10}} >{description}</p>
                    
                </div>

        </div>
    </div>
    )
}
export default Cards;