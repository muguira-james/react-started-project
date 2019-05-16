import React, { Component } from "react";
import ReactDOM from 'react-dom'

import Inputs from './Inputs'

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      inputValue: "enter your Mr Spock quote"
    };
    
  }
  handleChange = (event) => {
      this.setState( { inputValue: event.target.value } )
  }
  render() {
    // console.log("state->", this.state)
    return (
      <form id="article-form">
        <Inputs
          text={this.state.title}
          label="seo_title"
          type="text"
          id="seo_title"
          value={this.state.inputValue}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}
export default FormContainer;

