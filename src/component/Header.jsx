import { Link } from "react-router-dom";
import styled from 'styled-components';

const Stylednav = styled.div`
  // display: flex;
  // flex-direction: row;
`;
const Styledheader = styled.div`
  // display: flex;
  // flex-direction: column;
  // width: 100%;
`

const Header = () => {
  return (
    <Styledheader className="container-fluid">  
      
        
      
      
      <Stylednav className="row justify-content-between">
        <div className="col-3 ">
          <Link to="/" className="nav-link text-dark col">Blessing Martins</Link>
        </div>
        <div className="col-9">
          <div className="row">
            <Link to="/" className="nav-link col">Home</Link> 
            <Link to="/portfolio" className="nav-link col">Portfollio</Link>
            <Link to="/about" className="nav-link col" >About</Link>
            <Link to="/contact" className="nav-link col">Contact</Link>
          </div>

          
        </div>
        
      </Stylednav>
      
    </Styledheader>
  )
  
}

export default Header