import React, { Component } from 'react';
import './App.css';
import Side from './components/Side';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '3c8085d4db7cfd6c2dd1dac17290cf93';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: undefined, 
      country: undefined,
      temperature: undefined,
      humidity: undefined, 
      condtions: undefined,
      error: undefined
    }
    
  }
 
    getWeather = async (e) => {
      e.preventDefault() 
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`;
      const API_CALL = await fetch(URL);
      const API_DATA = await API_CALL.json()
      console.log(API_DATA);
      if( city && country) {
        this.setState({
          city: API_DATA.name, 
          country: API_DATA.sys.country,
          temperature: API_DATA.main.temp,
          humidity: API_DATA.main.humidity, 
          conditions: API_DATA.weather[0].description,
          
        });
      } else { 
        this.setState({error: "Please enter in a City and Country"})
      }
   
   }

  render() {

    return (
      <div className="App">
        <Side />
        <div className="App-container">
          <Form getWeather={this.getWeather}/>
          <Weather 
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          conditions={this.state.conditions}
          error={this.state.error}
          />
        </div>
       
      </div>
    );
  }

}

export default App;


