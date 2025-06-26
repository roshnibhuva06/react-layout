import Navbar from "./navbar";
import Footer from "./Footer";

function App(){
  return(
    <div className="container" style={{height:"657px",width:"100%",backgroundColor:"#b4d9a5",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div className="box" style={{height:"420px",width:"50%",backgroundColor:"white"}}>
<Navbar />
     <div style={{ width: '50%', textAlign: 'center' }}>
          <img
            src={"https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4="}
            alt="Peace Lily"
            style={{ width: '96%', height:"300px" }}
          />
        </div>
        
         <h2 style={{marginTop:"-42%",marginLeft:"54%", fontSize: '26px',fontFamily:"poppins,sans-serif",fontWeight:"300" }}>CLASSIC PEACE LILY</h2>
           <p style={{ color: 'black', fontSize: '14px',marginTop:"-3%" ,marginLeft:"54%",fontFamily:"poppins,sans-serif" }}>POPULAR HOUSE PLANT</p>

           <h3 style={{ fontSize: '40px',marginTop:"4%" ,marginLeft:"54%",fontWeight:"300" }}>$18</h3>

           <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#555',marginTop:"-3%" ,marginLeft:"53%"}}>
            Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red<br></br> ribbon and butterfly pick.
          </p> 

         <div>
            <button style={{
              padding: '10px 20px',
              marginRight: '10px',
              border: '1px solid #555',
              background: 'transparent',
              fontSize: '14px',
              marginLeft:"53%",
              marginTop:"1%"
            }}>ADD TO CART</button>

            <button style={{
              padding: '10px 20px',
              border: '1px solid #555',
              background: 'transparent',
              cursor: 'pointer',
              fontSize: '14px'
            }}>WISHLIST</button>
          </div>
          <Footer />

    </div>
    </div>
    
  )
}

export default App;
