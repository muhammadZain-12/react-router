import {NavLink} from "react-router-dom";
import  {BrowserRouter  as Router,Routes,Route} from "react-router-dom";
import Home from "../Home";
import Html from "../About";
import Service from "../Service";
import Info from "../Info";
import Contact from "../Contact";
import Logo from "../../images/quizAppLogo.png"



function AppRouter () {
    return (
        
        <Router >
<div style={{width:"100%",display:"flex",justifyContent:"flex-start",alignItems:"center",height:"10vh"}}>
        <div style={{width:"20%",display:"flex",justifyContent:"space-between",marginLeft:"20px"}}>
            <img src={Logo} width="100px" height="50px" alt="" />
        </div>
         <div style={{width:"50%",display:"flex",justifyContent:"space-between"}}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="Html">Html</NavLink>
        <NavLink to="Css">Css</NavLink>
        <NavLink to="Basic JavaScript">Basic JavaScript</NavLink>
        <NavLink to="Advance JavaScript">Advance JavaScript</NavLink>
        </div>
        <div style={{display:"flex",justifyContent:"flex-end",width:"20%",alignItems:"center"}}>
            <NavLink style={{marginRight:"15px",fontWeight:"600"}} to="Login">Login</NavLink>
            <NavLink to="SignUp" >
                <button className="button">SignUp</button>
                </NavLink>
        </div>
        </div>
        <div>
        <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="Html" element= {<Html/>} />
        <Route path="Css" element= {<Service/>} />
        <Route path="Basic javaScript" element= {<Contact/>} />
        <Route path="Advance JavaScript" element= {<Info/>} /> 
        </Routes>
        </div>
        </Router>
        
    )
}

export default AppRouter