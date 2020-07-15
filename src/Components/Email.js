import React from "react";
import { Form, Container } from "semantic-ui-react";


class Email extends React.Component {

  render() {
    return(
      <>
      <Container>

        <Form action="https://formspree.io/Primate.muscle@gmail.com" method="POST">
          <Form.Input 
            label="Name"
            placeholder="Name"
            type="text"
            name="name"
            // width="8"
          />
          <Form.Input 
            label="Email"
            placeholder="Email"
            type="email"
            name="email"
            // width="8"
          />
          <Form.TextArea 
            label="Order"
            placeholder="Design#/Size/Quantity"
            type="text"
            name="order"
            // width="8"
          />
          <Form.Button type="submit" fluid style={{background: "#bf2f10", color: "white"}} >Submit</Form.Button>
          
        </Form>
        {/* <Header as="h5" textAlign="center" className="copyright-line">© Primate Muscle. All rights reserved.</Header> */}

      </Container>
      <br />
      </>
    )
  }
}



export default Email;