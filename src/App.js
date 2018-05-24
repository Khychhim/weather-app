import React, { Component } from 'react';
import './App.css';
import forecast from './forecast';
import DayCard from './DayCard';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {isStateSet: false};
  }

  getWhatDay(day){
    var weekday = new Array(7);
    weekday[0] =  "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thur";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    day = day%7;

    return weekday[day];
  }

  componentDidMount(){
    var data = JSON.parse(JSON.stringify(forecast));
    var index = 1;
    console.log(data);
    for (var i = 8; i <= 40; i=i+8){
      let forecast = data.list.slice(i-8,i).map((main,) =>{
        return {
            temp: main.main.temp,
            weatherId: main.weather[0].id,
            weatherDescription: main.weather[0].description,
            weatherIcon: main.weather[0].icon
          }
      });
      this.setState({ ['forecastDay'+index]: forecast});
      index++;
    }

    this.setState({isStateSet : true});
  }

  render() {
    var date = new Date();
    var hour = date.getHours();

    return (
      this.state.isStateSet
      &&
      <div className="App">
        <DayCard forcast={this.state.forecastDay1} day={this.getWhatDay(date.getDay())} hour={hour}/>
        <DayCard forcast={this.state.forecastDay2} day={this.getWhatDay(date.getDay()+1)} hour={hour}/>
        <DayCard forcast={this.state.forecastDay3} day={this.getWhatDay(date.getDay()+2)} hour={hour}/>
        <DayCard forcast={this.state.forecastDay4} day={this.getWhatDay(date.getDay()+3)} hour={hour}/>
        <DayCard forcast={this.state.forecastDay5} day={this.getWhatDay(date.getDay()+4)} hour={hour}/>
      </div>
    );

  }


}

export default App;
