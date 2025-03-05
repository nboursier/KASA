import React from "react"
import './Banner.scss'
import imgbanner from "../../assets/e270fc8fc902a1eb738458e7b29c1899.jpg"

function Banner() {
 return(

   <div className="banner">
   <div className="box">
      < img src = {imgbanner} alt="banner"/>
   </div>
   <p className="banner--txt">Chez vous, partout et ailleurs</p>
</div>  
 )

}

export default  Banner