import React from "react"
import './Navbar.css'
import { NavLink } from "react-router"
import logo from "../../assets/logo.png"

function Navbar() {
 return(

   <div className="navbar">
   <div className="navbar--logo">
      < img src = {logo} alt="logo"/>
   </div>
   <div className="navbar--link">
   <div ><NavLink to={"/"}> <div className="navbar--link__txt" >Accueil</div> </NavLink> 
   </div> 
   <div ><NavLink to={"/About"}> <div className="navbar--link__txt">A Propos</div></NavLink> 
   </div>
   </div>
</div>  
 )

}

export default  Navbar