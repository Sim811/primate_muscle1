import React from "react";
import { Container, Segment, Grid, Header, Image, Responsive } from "semantic-ui-react";
import Email from "./Email.js";
import Footer from "./Footer.js";
 
class Shop extends React.Component {



  render() {
    return(
      <>
      {/* <Header size="huge" textAlign="center">Shop</Header> */}
      <br />
      <br />
        
      <Container style={{justifyContent: "center", display: "flex",}}>
          
            {/* <Image  src={require("../Images/DesignHereShirt.png")} size="medium" style={{  width: "366px"}}  /> */}
              
            

            <Grid columns='equal' centered>
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

      </Container>
     
        <br />
        <br />
        <br />

        <Header size='huge' textAlign="center"> Place Your Order </Header>
        <Email />
        <Footer />
        <br />
      </>
    )
  }
}



export default Shop;