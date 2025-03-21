import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Gallery from '../components/gallery/Gallery'
import Footer from '../components/Footer/Footer'
import imgbanner from "../assets/e270fc8fc902a1eb738458e7b29c1899.jpg"

function Home() {

    return(
      <div>
        <div>
        <Navbar/>
        <Banner  value={imgbanner}/>
        <Gallery/>
        <Footer/>
        </div>
     </div>
    )
}

export default Home