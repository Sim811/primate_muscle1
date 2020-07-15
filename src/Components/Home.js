import React from "react";
import { Container, Image } from "semantic-ui-react";
import Footer from "./Footer.js";
import Fade from "react-reveal/Fade";
// import "../Images/Logo.png";


class Home extends React.Component {

  render() {
    return(
      <>
        <Fade duration={5000}>
          <Image src={require("../Images/Logo (1).png")} centered  />
        </Fade>
        <Container textAlign="center">
          <Footer />
          <br />
        </Container>
      </>
    )
  }
}




export default Home;