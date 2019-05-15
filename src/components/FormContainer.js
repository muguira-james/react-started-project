import React, { Component } from "react";
import ReactDOM from 'react-dom'

import Inputs from './Inputs'

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
      this.setState( { [event.target.id] : event.target.value } )
  }
  render() {
    console.log("state->", this.state)
    return (
      <form id="article-form">
        <Inputs
          text={this.state.title}
          label="seo_title"
          type="text"
          id="seo_title"
          value={this.state.title}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}
export default FormContainer;

