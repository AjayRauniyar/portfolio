import "./app.scss"
import Ajay from "./components/ajay/ajay";
import Contact from "./components/contact/contact";
import Navbar from "./components/navbar/navbar";
import Portfolio from "./components/portfolio/portfolio";
import Services from "./components/services/services";
const App = () => {
  return <div>
    <section id="Homepage">
      
      <Navbar/>
      <Ajay/>
    </section>
    
    <section id="Services">
      <Services/>
    </section>
    <div id="Portfolio">
      <Portfolio/>
    </div>
    
    <section id="Contact">
      <Contact/>
    </section>

    
  </div>;
};

export default App;
