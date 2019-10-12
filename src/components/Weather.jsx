import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div className="Weather">
        <h5>INFO_DATA</h5>
        {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.conditions && <p>Condtions: {this.props.conditions}</p>}
        {this.props.error && <p>{this.props.error}</p>}      
      </div>
    )
  }
}

export default Weather;