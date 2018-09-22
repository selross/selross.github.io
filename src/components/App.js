import React, {Component} from "react";
import {hot} from "react-hot-loader";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class App extends Component{
  render(){
    return(
      <div className="App">
        <Title> Hello? World? </Title>
      </div>
    );
  }
}

export default hot(module)(App);
