import React from "react";
import { Container, Grid, Header, Image } from "semantic-ui-react";
import Email from "./Email.js";
import Footer from "./Footer.js";
import Fade from "react-reveal/Fade";

 
class Shop extends React.Component {



  render() {
    return(
      <>
      {/* <hr /> */}
      {/* <Header size="huge" textAlign="center">Shop</Header> */}
      <br />
      <br />
        

      <Header textAlign="center" size="huge">Designs</Header>
      <hr style={{ width: "30%"}} />
      <Container style={{justifyContent: "center", display: "flex",}}>
          
            {/* <Image  src={require("../Images/DesignHereShirt.png")} size="medium" style={{  width: "366px"}}  /> */}
              
            
          <Fade duration={4000}>

            <Grid columns='equal' centered >
              <Grid.Row>
                <Grid.Column textAlign="center" >
                  <Image src={require("../Images/Design_1.jpg")} />
                  #1 
                </Grid.Column>
                <Grid.Column textAlign="center" >
                  <Image src={require("../Images/Design_2.jpg")} />
                  #2
                </Grid.Column>
                <Grid.Column textAlign="center" >
                  <Image src={require("../Images/Bottom_only.jpg")} />
                  #3
                </Grid.Column>
              </Grid.Row>
              
              <Grid.Row>
                <Grid.Column textAlign="center" >
                  <Image  src={require("../Images/Logo (1).png")} />
                  #4
                </Grid.Column>
                <Grid.Column textAlign="center" >
                  <Image src={require("../Images/Origanla.jpg")} />
                  #5
                </Grid.Column>
                <Grid.Column textAlign="center" >
                  <Image src={require("../Images/Primate (1).png")} />
                  #6
                </Grid.Column>
              </Grid.Row>          
            </Grid>
          </Fade>

      </Container>
     
        <br />
        <br />
        <br />
        
        <Header size='huge' textAlign="center"> Place Your Order </Header>
        {/* <hr style={{ width: "50%" }} /> */}
        <Email />
        <Footer />
        <br />
      </>
    )
  }
}



export default Shop;