import React from 'react';
import {Route} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Shop from "./Components/Shop";

class App extends React.Component {


render() {
  return (
    <>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/shop" component={Shop} />
      
    </>
  );
  }
}

export default App;
