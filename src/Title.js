import React from 'react';
import ReactDOM from 'react-dom';

class Title extends React.Component{


  getcurrentForcast(){
    var currentForcastValue = {temp: "", description: ""};
    var hour = this.props.hour;
    var startIndex = parseInt(hour/3);
    var forcastDay1 = this.props.allForcast.forecastDay1;

    forcastDay1.slice(startIndex,startIndex+1).map(data =>{
      currentForcastValue.temp = parseInt(data.temp);
      currentForcastValue.description = data.weatherDescription;
    });
    console.log(currentForcastValue);
    return currentForcastValue;
  }

  render() {
    var currentForecast = this.getcurrentForcast();
    console.log(currentForecast.description);
    return (
      <div className="Title">
        <div className="Location">Auckland</div>
        <div className="Description">{currentForecast.description}</div>
        <div className="Degree">{currentForecast.temp}<span className="DegreeSymbol">&deg;</span></div>
      </div>
    );
  }
}

export default Title;
