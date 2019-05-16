import React from "react";
import PropTypes from "prop-types";

// const Inputs = () => (

class Inputs extends React.Component {
    render() {
      let { label, text, type, id, value, handleChange } = this.props
      return (
        <div className="input-stuff">
          <label className="form-text-label" htmlFor={label}>{text}</label>
          <input
            type={type}
            className="inputs-control"
            id={id}
            value={value}
            onChange={handleChange}
        
          />
        </div>
      )
    }
  }

Inputs.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
export default Inputs;