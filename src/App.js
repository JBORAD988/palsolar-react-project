import logo from './logo.svg';
import Navbar from '../src/Components/Navbar'
import Home from  '../src/Components/Homepage'
import Service from '../src/Components/Service'
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
       <Home/>
       <Service/>
    </div>
  );
}

export default App;
