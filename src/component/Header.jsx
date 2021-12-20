import { Link } from "react-router-dom";
import styled from 'styled-components';

const Stylednav = styled.div`
  display: flex;
  flex-direction: row;
`;
const Styledheader = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = () => {
  return (
    <Styledheader>  
      
        
      
      
      <Stylednav>
        <Link to="/" className="nav-link text-dark">Model Name Here</Link>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/portfolio" className="nav-link">Portfollio</Link>
        <Link to="/about" className="nav-link" >About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </Stylednav>
      
    </Styledheader>
  )
  
}

export default Header