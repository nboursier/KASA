import Navbar from '../components/Navbar/Navbar'

import { NavLink } from "react-router"
import Footer from '../components/Footer/Footer'
import './P404.css'


function P404() {

  return (
    
      <div className="container">
        <Navbar />
        
        <div className="P404--container">

        <p className="P404--txt1">404</p>
        <p className="P404--txt2">Oups! La page que vous demandez n'existe pas.</p>
        <div ><NavLink to={"/"}> <div className="P404--link__txt" >Retourner sur la page d’accueil</div> </NavLink> 
        </div> 
        </div>

        
        <Footer />
      </div>
    
  )
}

export default P404