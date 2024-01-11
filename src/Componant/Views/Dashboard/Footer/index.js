

function Footer() {
    return(
        <div >  

        <footer style={{ width:'100%', background:'#ebeeef', paddingBottom:50 , }} >       
             <div style={{display:'flex', paddingLeft:'4rem', }} >
            <div style={{ margin: "0 4rem", textAlign:'left', fontSize:12 }}>
                <h4>POPULAR CATEGORIES</h4>
                <p style={{ margin: '0 0 5px 0' }}>Car</p>
                <p style={{ margin: '0 0 5px 0' }}>Flates For Rent</p>
                <p style={{ margin: '0 0 5px 0' }}>Mobile Phones</p>
                <p style={{ margin: '0 0 5px 0' }}>Jobs</p>
            </div>
            <div style={{ margin: "0 4rem", textAlign:'left', fontSize:12 }}>
                <h4>TRENDING SEARCHES</h4>
                <p style={{ margin: '0 0 5px 0' }}>Bikes</p>
                <p style={{ margin: '0 0 5px 0' }}>Watches</p>
                <p style={{ margin: '0 0 5px 0' }}>Bookes</p>
                <p style={{ margin: '0 0 5px 0' }}>Dogs</p>
            </div>
            <div style={{ margin: "0 4rem", textAlign:'left', fontSize:12 }}>
                <h4>ABOUT US</h4>
                <p style={{ margin: '0 0 5px 0' }}>About Dubizzle Group</p>
                <p style={{ margin: '0 0 5px 0' }}>OLX Blog</p>
                <p style={{ margin: '0 0 5px 0' }}>Contact Us</p>
                <p style={{ margin: '0 0 5px 0' }}>OLX for Businesses</p>
            </div>
            <div style={{ margin: "0 4rem", textAlign:'left', fontSize:12 }}>
                <h4>OLX</h4>
                <p style={{ margin: '0 0 5px 0' }}>Help</p>
                <p style={{ margin: '0 0 5px 0' }}>Sitemap</p>
                <p style={{ margin: '0 0 5px 0' }}>Mobile Phones</p>
                <p style={{ margin: '0 0 5px 0' }}>Terms of use</p>
            </div>
            <div style={{marginTop:60}}>
               <img style={{width:100}} src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" ></img>
            <img   style={{width:100}} src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" ></img>
            <img  style={{width:100}} src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" ></img>
            
            </div>
           

        </div>
        </footer>
        <div style={{width:'100%', height:'50px', background:'#002f34', paddingTop:6}}>
        <p style={{textAlign:'right', color:'white',}}>Free Classifieds in Pakistan . © 2006-2024 OLX</p>

        </div>
        </div>

    )
}



export default Footer;