import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class FiveDaysCard extends React.Component{

  calculation(){
    var data = this.props.forcast;
    var hour = ((this.props.hour)/3)>>0;

    var dayForcast = {
      minTemp: "",
      maxTemp: "",
      weatherIcon: ""
    };

    var min = 100;
    var max = -100;
    data.map((forcast,i) => {
      if(i === hour){
        dayForcast.weatherIcon = forcast.weatherIcon;
      }

      if(forcast.temp < min){
        min = forcast.temp;
      }

      if(forcast.temp > max){
        max = forcast.temp;
      }

    });

    if((this.props.hour) > 7 && (this.props.hour) < 18){
      dayForcast.weatherIcon = dayForcast.weatherIcon.substring(0,2)+"d";
    }else {
      dayForcast.weatherIcon = dayForcast.weatherIcon.substring(0,2)+"n";
    }


    dayForcast.minTemp = Math.floor(min);
    dayForcast.maxTemp =  Math.floor(max);

    return dayForcast;
  }

  render() {
    var dayForcast = this.calculation();

    var id = "http://openweathermap.org/img/w/"+dayForcast.weatherIcon+".png"
    var link = "/"+this.props.day;
    let dayDisplay = this.props.day.substring(0,3);
    return (
      <div className="Card">
        <Link to={link} className="StyleLink">
          <div className="Day">{dayDisplay}</div>
          <img src={id}></img>
          <div className="Temperature"><span style={{color: 'black'}}>{dayForcast.maxTemp}&deg;</span> &nbsp;&nbsp;{dayForcast.minTemp}&deg; </div>
        </Link>
      </div>
    );
  }
}

export default FiveDaysCard;
