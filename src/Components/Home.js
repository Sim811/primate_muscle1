import React from "react";
import { Container, Image, Segment, Button } from "semantic-ui-react";
import Footer from "./Footer.js";
// import "../Images/Logo.png";


class Home extends React.Component {



  render() {
    return(
      <>
        <Image src={require("../Images/Logo (1).png")} centered  />
        <Container textAlign="center">
          <Footer />
          <br />
        </Container>
      </>
    )
  }
}




export default Home;