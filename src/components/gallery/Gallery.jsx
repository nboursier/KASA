import React from "react"
import './Gallery.scss'
import { Link } from "react-router"
import logements from '../../logements.json'

function Gallery() {
    return (

        <div className="gallery--container">
            <div className="gallery--grid">
                {
                    logements.map( (logement)=> (
                        <div><Link to={`/Logementsp/${logement.id}`}>
                            <div className="gallery--card">
                                
                                    <img className="gallery--card__img" src={logement.cover} alt="cover" />

                                
                                <div className="gallery--card__txt">{logement.title} 
                                </div>
                            </div>
                            </Link>
                        </div>

                    ))
                }

                
            </div>
        </div>
    )

}

export default Gallery