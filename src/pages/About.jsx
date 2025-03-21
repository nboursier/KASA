import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Dropdown from "../components/dropdown/Dropdown"
import Footer from '../components/Footer/Footer'
import './about.css'
import imgbanner from "../assets/banner2.jpg"

function About() {

  return (
    
      <div>
        <Navbar />
        <Banner value={imgbanner}/>
        
        <div className="About--container">

          <div className="About--Dropdown">
            <div className="About--Dropdown--detail">
              <Dropdown dtitle="Fiabilité" doption="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
            </div>
            <div className="About--Dropdown--detail">
              <Dropdown  dtitle="Respect" doption="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
            </div>
            <div className="About--Dropdown--detail">
              <Dropdown  dtitle="Service" doption="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." />
            </div>
            <div className="About--Dropdown--detail">
              <Dropdown  dtitle="Sécurité" doption="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    
  )
}

export default About