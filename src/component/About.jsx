import image1 from "../photos/IMG_7985.JPG";
import image2 from "../photos/IMG_7837.JPG";
import styled from "styled-components";

const AboutPageDiv = styled.div`
  position: static;
  display: grid;
  height: auto;
  width: 100%;
  min-height: 517px;
  margin-top: -17px;
  grid-template-rows: min-content 1fr;
  grid-template-columns: 100%;
  padding-bottom: 0px;
  box-sizing: border-box;
`
const TopSection = styled.section`
  --bg-overlay-color: transparent;
  --padding: 0px;
  --margin: 0px;
  min-width: 980px;
  --firstChildMarginTop: -1px;
  --lastChildMarginBottom: -1px;
`
const BottomSection = styled.section`
  --bg-overlay-color: transparent;
  --padding: 0px;
  --margin: 0px;
  min-width: 980px;
  --firstChildMarginTop: -1px;
  --lastChildMarginBottom: -1px;
`
const ColDiv = styled.div`
  display: flex;
  position: relative;
  width: calc(100% - var(--padding) * 2);
  margin: 0 auto;
`
const TopTextDiv = styled.div`
--bg-overlay-color: rgb(var(--color_27));
width: 100%;
--column-width: 490px;
--column-flex: 490;
`
const TopImgDiv = styled.div`
--bg-overlay-color: rgb(var(--color_27));
width: 100%;
--column-width: 490px;
--column-flex: 490;
`
const BottomTextDiv = styled.div`
--bg-overlay-color: rgb(var(--color_27));
width: 100%;
--column-width: 490px;
--column-flex: 490;
`
const BottomImgDiv = styled.div`
--bg-overlay-color: rgb(var(--color_27));
width: 100%;
--column-width: 490px;
--column-flex: 490;
`
const About = () => {
  return (
    <>
      <AboutPageDiv>
        <TopSection>
          <ColDiv>
            <TopTextDiv>
            <div >
              <h1 style={{fontSize:"36px", lineHeight:"1.5em", textAlign:"left"}}>
                <span style={{fontSize:"36px"}}>
                  <span style={{fontFamily:"helvetica-w01-light,helvetica-w02-light,sans-serif"}}>
                    <span>
                      ABOUT ME
                    </span>
                  </span>
                </span>
              </h1>

              <p style={{textAlign:"left", fontSize:"20px"}}>
                <span>​</span></p>

              <p style={{lineHeight:"1.5em", textAlign:"left", fontSize:"20px"}}>
                <span style={{fontFamily:"helvetica-w01-light,helvetica-w02-light,sans-serif"}}>Freelance Model</span></p>

              <p style={{textAlign:"left", fontSize: "20px"}}><span >​</span></p>

              <p  style={{lineHeight:"1.5em", textAlign:"left", fontSize: "18px"}}><span style={{fontFamily: "helvetica-w01-light,helvetica-w02-light,sans-serif"}}>Welcome to my modeling portfolio. I started modeling in October 2019 and immediately fell in love with meeting talented creatives and helping to bring their ideas to life. My time is primarily spent in New York City, NY; Miami, FL; and Columbus, OH. I am also available to travel to other destinations in the United States and internationally. I have experience in editorial, runway, commercial, and pageantry.</span></p></div>
            </TopTextDiv>
            <TopImgDiv>
            <img src={image1} alt="DSCF2678-Edit-Edit-Edit.jpg" style={{width: "449px", height: "617px", objectFit: "cover", objectPosition: "50% 50%;"}}/>
            </TopImgDiv>
          </ColDiv>
        </TopSection>

        <BottomSection>
          <ColDiv>
            <BottomImgDiv>
            <img src={image2} alt="DSCF2678-Edit-Edit-Edit.jpg" style={{width: "449px", height: "617px", objectFit: "cover", objectPosition: "50% 50%;"}}/>

            </BottomImgDiv>
            <BottomTextDiv>
            <div >
              <h1 style={{fontSize:"36px", lineHeight:"1.5em", textAlign:"left"}}>
                <span style={{fontSize:"36px"}}>
                  <span style={{fontFamily:"helvetica-w01-light,helvetica-w02-light,sans-serif"}}>
                    <span>
                      ABOUT ME
                    </span>
                  </span>
                </span>
              </h1>

              <p style={{textAlign:"left", fontSize:"20px"}}>
                <span>​</span></p>

              <p style={{lineHeight:"1.5em", textAlign:"left", fontSize:"20px"}}>
                <span style={{fontFamily:"helvetica-w01-light,helvetica-w02-light,sans-serif"}}>Freelance Model</span></p>

              <p style={{textAlign:"left", fontSize: "20px"}}><span >​</span></p>

              <p  style={{lineHeight:"1.5em", textAlign:"left", fontSize: "18px"}}><span style={{fontFamily: "helvetica-w01-light,helvetica-w02-light,sans-serif"}}>Welcome to my modeling portfolio. I started modeling in October 2019 and immediately fell in love with meeting talented creatives and helping to bring their ideas to life. My time is primarily spent in New York City, NY; Miami, FL; and Columbus, OH. I am also available to travel to other destinations in the United States and internationally. I have experience in editorial, runway, commercial, and pageantry.</span></p></div>
            </BottomTextDiv>
          </ColDiv>
        </BottomSection>
      </AboutPageDiv>
    
    </>
  )
}

export default About