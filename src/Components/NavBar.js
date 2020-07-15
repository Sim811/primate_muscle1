import React from "react";
// import { Navbar, Nav } from "react-bootstrap";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Flip from 'react-reveal/Flip';


class NavBar extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return(
      <div style={{ alignItems: "center", display: 'flex', justifyContent: "center"}} >
       <Flip duration={2000} top>

        <NavButton as={Link} to="/" basic >Home</NavButton>
       
        <Image src={require("../Images/Primate (1).png")} as={Link} to="/" size="small"  />

        <NavButton as={Link} to="/shop">Shop</NavButton>
        
        {/* <Menu  secondary style={{ marginRight: "1.642857em",  marginTop: ".5rem"}}>

<Menu.Menu position="right">
<Link to="/">
              <Menu.Item 
              name="home" 
              active={this.state.activeItem === 'home'} 
                onClick={this.handleItemClick}
              >
                Home
                </Menu.Item>
            </Link>
            <Link to="/shop">
              <Menu.Item 
              name="shop" 
                active={this.state.activeItem === 'shop'} 
                onClick={this.handleItemClick}
                >
                Shop
                </Menu.Item>
                </Link>
                </Menu.Menu>
              </Menu> */}
        </Flip>
      </div>
    )
  }
}

const NavButton = styled.button`
  color: black !important;
  font-size: 1.5em !important;
`;


export default NavBar;