import homeImg from "../photos/IMG_7837.JPG"
import styled from 'styled-components'

const HomeImg = styled.img`
  padding-top: 20%;
  width: 100%; 
  
`;
const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <HomeImg src={homeImg} className="" />
      </div>
    </>
  )
}

export default Home