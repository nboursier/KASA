import React from "react"
import './Banner.css'


function Banner(props) {
 return(

   <div className="banner">
   <div className="box">
      < img src = {props.value} alt="banner"/>
   </div>
   <p className="banner--txt">Chez vous, partout et ailleurs</p>
</div>  
 )

}

export default  Banner