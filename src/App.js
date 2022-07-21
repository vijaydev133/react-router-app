
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Service from './Service';
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Subscribe from './Subscribe';

function App() {
  return (
    <div className="App">
      <Nav/>
    
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path = "header" element = {<Header/>}></Route>
          <Route path='about' element= {<About/>}></Route>
          <Route path='service' element = {<Service/>}></Route>
          <Route path='subscribe' element = {<Subscribe/>}></Route>
        </Routes>
      
    </div>
  );
}

export default App;
