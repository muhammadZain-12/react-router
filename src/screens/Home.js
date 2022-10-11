
import  Image  from '../images/backImage.jpg'
import StaticExample from './Modal'
import { useState } from 'react'
function Home () {

const [modal,setModal]  = useState("")

const closeModal = () =>{
    setModal("")
}


const getModal = () => {
        setModal(<StaticExample onClick = {closeModal}/>)
}
    return (
            <div style={{backgroundImage:`url(${Image})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100%",height:"90vh",display:"flex",justifyContent:"center",alignItems:"center"}} className="Home">
            <div style={
                {display:"flex",flexDirection:"column",alignItems:"center"
                }
            } className='inner-div' >
                    
                    <h1>Welcome User...</h1>
                    <h3>Want to be a Good FrontEnd Developer</h3>
                    <h3>Play Our Quiz game to Strengthen your Skills</h3>
                    <button onClick = {getModal} style={{width:"12vw",marginTop:"20px"}} className='button' id='btn-home'>Click Here To Play</button>
                    <div  style={{marginTop:"20px",borderRadius:"20px",position:"absolute",background:"white",color:"black",width:"40vw"}}>
                        {modal}
                    </div>
            </div>
            </div>
    )
}

export default Home