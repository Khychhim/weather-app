import React, { Component } from 'react';
import './App.css';
import forecast from './forecast';
import FiveDaysCard from './5DaysCard';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EachDayCard from './EachDayCard';

class App extends Component {
  constructor(){
    super();
    this.state = {isStateSet: false};
  }

  getWhatDay(day){
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tueday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thurday";
    weekday[5] = "Friday";
    weekday[6] = "Satday";

    day = day%7;

    return weekday[day];
  }

  componentDidMount(){
    var data = JSON.parse(JSON.stringify(forecast));
    var index = 1;
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
    // <Route  exact path="/" render={()=><FiveDaysCard forcast={this.state.forecastDay1} day={this.getWhatDay(date.getDay())} hour={hour}/>} />
    // <Route  exact path={'/'+this.getWhatDay(date.getDay())} render={()=><EachDayCard forcast={this.state.forecastDay1} day={this.getWhatDay(date.getDay())} hour={hour}/>} />
    return (
      this.state.isStateSet
      &&
      <Router>
        <div className="App">
          <Route  exact path="/" render={()=><FiveDaysCard forcast={this.state.forecastDay1} day={this.getWhatDay(date.getDay())} hour={hour}/>} />
          {/*<Route  exact path="/" render={()=><FiveDaysCard forcast={this.state.forecastDay2} day={this.getWhatDay(date.getDay()+1)} hour={hour}/>} />
          <Route  exact path="/" render={()=><FiveDaysCard forcast={this.state.forecastDay3} day={this.getWhatDay(date.getDay()+2)} hour={hour}/>} />
          <Route  exact path="/" render={()=><FiveDaysCard forcast={this.state.forecastDay4} day={this.getWhatDay(date.getDay()+3)} hour={hour}/>} />
          <Route  exact path="/" render={()=><FiveDaysCard forcast={this.state.forecastDay5} day={this.getWhatDay(date.getDay()+4)} hour={hour}/>} />*/}

          <Route  exact path={'/'+this.getWhatDay(date.getDay())} render={()=><EachDayCard allForcast={this.state} day={this.getWhatDay(date.getDay())} hour={hour}/>} />
          {/*<Route  exact path={'/'+this.getWhatDay(date.getDay()+1)} render={()=><EachDayCard forcast={this.state.forecastDay2} day={this.getWhatDay(date.getDay()+2)} hour={hour}/>} />
          <Route  exact path={'/'+this.getWhatDay(date.getDay()+2)} render={()=><EachDayCard forcast={this.state.forecastDay3} day={this.getWhatDay(date.getDay()+3)} hour={hour}/>} />
          <Route  exact path={'/'+this.getWhatDay(date.getDay()+3)} render={()=><EachDayCard forcast={this.state.forecastDay4} day={this.getWhatDay(date.getDay()+4)} hour={hour}/>} />
          <Route  exact path={'/'+this.getWhatDay(date.getDay()+4)} render={()=><EachDayCard forcast={this.state.forecastDay5} day={this.getWhatDay(date.getDay()+5)} hour={hour}/>} />*/}
        </div>
      </Router>

    );

  }


}

export default App;
