import { useLocation } from "react-router-dom";
import Navbar from "../../Componant/Views/Dashboard/Navbar";
import Footer from "../../Componant/Views/Dashboard/Footer";


function DetailScreen() {
    const { state } = useLocation();
    console.log("🚀 ~ DetailScreen ~ state:", state);


    return (

        <div >
            <Navbar /><br></br><br></br><br></br>
            <div style={{ display: "flex" }}>
                <div style={{ width: '50%', border: '1px solid grey', }}>
                    <img src={state.images[0]}></img>
                </div>
                <div style={{ textAlign: "Left", width: '40%', border: '1px solid grey', marginLeft: '2rem', padding: 10 }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex' }} >
                            <img style={{ width: 70, height: 70, borderRadius: 70 }} src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/406052296_316707201208765_2752583969636561009_n.jpg?stp=dst-jpg_p843x403&_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFcnPfIHms1oeVvd73a45ZIjMfqmjN0X1KMx-qaM3RfUseSD_iRCkjYaQlzPPy8Kvi0iKzkUD7kZpDn3XNz7Q5S&_nc_ohc=-Cvzr_pBPWIAX-kmtZ-&_nc_ht=scontent.fkhi17-1.fna&oh=00_AfDDXa-FY3jAU5xjWev6vbjGZ-hzwjAG1v8357Txjn4igg&oe=65A38A3E"   ></img>
                            <p style={{ fontWeight: "bold", marginTop: 1, marginLeft: 10, }} >usama javed</p>
                        </div>
                        <div style={{ display: 'flex' }} >
                            <p style={{ marginLeft: '-5.5rem', marginTop: 25 }} >member since feb 2024</p>
                            <h4 style={{ marginLeft: '-10.3rem', marginTop: 50 }} >see profile</h4>

                        </div>
                    </div>
                    <h1>{state.title}</h1>
                    <h4>{state.description}</h4>
                    <h3>${state.price}</h3>

                </div>
            </div><br></br><br></br><br></br><br></br>
            <Footer />
        </div>
    );
}

export default DetailScreen;
