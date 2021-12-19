import { Routes, Route} from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Portfollio from "./component/Portfolio";
import About from "./component/About";
import Contact from "./component/Contact";



const Footer = () => {
  return (
    <>
      Footer
    </>
  )
}

const App = () => {
  return (
    <>
    <Header />
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfollio />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
    
    </>
    
  )
}

export default App;
