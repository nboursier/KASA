import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Gallery from '../components/gallery/Gallery'
import Footer from '../components/Footer/Footer'
function Home() {

    return(
      <div>
        <div>
        <Navbar/>
        <Banner/>
        <Gallery/>
        <Footer/>
        </div>
     </div>
    )
}

export default Home