import React from "react"
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './Logementsp.css'
import Dropdown from "../components/dropdown/Dropdown"
import Rating from "../components/Rating/Rating"
import logements from '../logements.json'
import Tags from "../components/Tags/Tags"
import { useParams } from "react-router"
import P404 from "./P404"
import { useState } from "react"
function Logementsp() {
    const { id } = useParams()
    const logementaffiché = logements.find((logement) => logement.id === id)
    if (logementaffiché === undefined) {
        return <P404 />

    }
    console.log(logementaffiché)
    console.log(logementaffiché.tags)


    const [count, setcount] = useState(0)
    const countmax = logementaffiché.pictures.length - 1
    const countup = () => {
        if (count < countmax) { setcount(count + 1) }
        else { setcount(count - countmax) }
        console.log(count)
    }

    const countdown = () => {
        if (count > 0) { setcount(count - 1) }
        else { setcount(count + countmax) }

        console.log(count)

    }

    const carroussel = [
        <div className="imagecover--container__arrowcount">
            <div className="imagecover--container__arrow">
                <div onClick={countdown}>
                    <svg className="imagecover--arrow__left" width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white" />
                    </svg>
                </div>
                <div onClick={countup}>
                    <svg className="imagecover--arrow__right" width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white" />
                    </svg>
                </div>
            </div>

            <div className="imagecover--count" >
                {count} / {logementaffiché.pictures.length - 1}
            </div >
        </div >


    ]

    let carrousselaffiche = []
    if (countmax > 0) {

        carrousselaffiche = carroussel

    }

    else {

    }
    return (
        <div  >
            <div  >
                <Navbar />
                <div  className="imagecover--container">

                    {carrousselaffiche}
                    <div  className="imagecover">




                        <img key={logementaffiché.pictures[count]}  src={logementaffiché.pictures[count]} alt="cover" />

                    </div>
                </div>
                <div className="title">
                    <div className="title--txt">
                        <h1 key={logementaffiché.title} className="title--txt1">{logementaffiché.title}</h1>
                        <h2 key={logementaffiché.location} className="title--txt2">{logementaffiché.location}</h2>
                        <div className="title--tags">
                            <Tags key={logementaffiché.tags} content={logementaffiché.tags} />

                        </div>

                    </div>
                    <div className="title--host__container">
                        <div className="title--host__name">
                            <h4 key={logementaffiché.host.name} className="title--host__txt">{logementaffiché.host.name}</h4>
                            <div key={logementaffiché.host.picture} className="title--host__circle">
                                <img src={logementaffiché.host.picture} alt="cover" />
                            </div>
                        </div>


                        <div className="title--host__rating">
                            <Rating key={logementaffiché.rating} value={logementaffiché.rating} />
                        </div>
                    </div>
                </div>

                <div className="detail--container">
                    <div className="detail--dropdown">
                        <Dropdown key={logementaffiché.description} dfontsize="18px" dtitle="Description" doption={logementaffiché.description} />
                    </div>
                    <div className="detail--dropdown">
                        <Dropdown key={logementaffiché.equipments} dfontsize="18px" dtitle="Équipements" doption={logementaffiché.equipments} />
                    </div>


                </div>
                <Footer />
            </div>
        </div>


    )

}

export default Logementsp