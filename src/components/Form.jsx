import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getWeather}>
          <h3>Enter Location</h3>
          <input type="text" name="city" placeholder="City"/>
          <input type="text" name="country" placeholder="Country"/>
          <button>Get Weather</button>
          
        </form>
      </div>
    )
  }
}

export default Form;