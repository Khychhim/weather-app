import React from 'react';
import ReactDOM from 'react-dom';

class DayCard extends React.Component{
  constructor(){
    super();
  }

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

    dayForcast.minTemp = Math.floor(min);
    dayForcast.maxTemp =  Math.floor(max);

    return dayForcast;
  }

  render() {
    var dayForcast = this.calculation();

    var id = "http://openweathermap.org/img/w/"+dayForcast.weatherIcon+".png"
    return (
      <div className="Card">
        <div className="Day">{this.props.day}</div>
        <img src={id}></img>
        <div className="temperature"><span style={{color: 'black'}}>{dayForcast.maxTemp}&deg;</span> &nbsp;&nbsp;{dayForcast.minTemp}&deg; </div>
      </div>
    );
  }
}

export default DayCard;
