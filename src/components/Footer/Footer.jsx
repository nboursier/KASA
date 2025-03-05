import React from "react"
import './Footer.scss'
import logo2 from "../../assets/logo2.png"

function Footer() {
    return (

        <div className="footer--container">
            <div className="footer--logo">
            < img src = {logo2} alt="logo"/>
            </div>
            <div className="footer--txt">© 2020 Kasa. All rights reserved</div>
        </div>
    )

}

export default Footer