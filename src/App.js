import logo from './logo.svg';
import Navbar from '../src/Components/Navbar'
import Home from  '../src/Components/Homepage'
import Service from '../src/Components/Service'
import AboutUs from '../src/Components/Aboutus'
import ContactUs from '../src/Components/Contactus'
import Footer from '../src/Components/Footer'
import ClientSection from '../src/Components/OurClients'
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
       <Home/>
       <Service/>
       <hr></hr>
       <ClientSection/>
       <hr></hr>
       <AboutUs/>
       <hr></hr>
       <ContactUs/>
       <Footer/>
    </div>
  );
}

export default App;
