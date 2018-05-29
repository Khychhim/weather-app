import React from 'react';
import ReactDOM from 'react-dom';
import leftArrow from './Image/Arrow_Left.png';
import rightArrow from './Image/Arrow_Right.png';
import * as Scroll from 'react-scroll';
import {Link , Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';
class HourlyForcast extends React.Component{
  constructor(){
    super();
    this.state = {visibilityLeft: "collapse",
                  visibilityRight: ""};
  }

  getHourlyForecastValue(){
    var HourlyForcastValue = {hour: [], temp: [], icon: [], description: []};
    var hour = this.props.hour;
    var offset = hour%3;
    var startIndex = parseInt(hour/3);
    var hourlyTime = hour;
    var forcastDay1 = this.props.allForcast.forecastDay1;
    var forcastDay2 = this.props.allForcast.forecastDay2;

    //retrieve first day value base on current hour
    forcastDay1.slice(startIndex,8).map(data =>{
      for(var i = 0; i < 3; i++){
        //offset here is for retrieve starting from current time as each array equal to 3 hours
        if(i >= offset){
          HourlyForcastValue.hour.push(hourlyTime%24);
          HourlyForcastValue.temp.push(parseInt(data.temp));
          HourlyForcastValue.icon.push(data.weatherIcon);
          HourlyForcastValue.description.push(data.weatherDescription);
          hourlyTime++;
        }
      }
      offset = 0;
    });


    //retrieve second day value starting from 0:00 hour
    hourlyTime = 0;
    forcastDay2.slice(0,startIndex).map(data =>{
      for(var i = 0; i < 3; i++){
        HourlyForcastValue.hour.push(hourlyTime%24);
        HourlyForcastValue.temp.push(parseInt(data.temp));
        HourlyForcastValue.icon.push(data.weatherIcon);
        HourlyForcastValue.description.push(data.weatherDescription);
        hourlyTime++;
      }
    });

    //offset here is for retrieve any remainding hours from the second day
    offset = hour%3;
    if(offset > 0){
      forcastDay2.slice(startIndex,startIndex+1).map(data =>{
        for(var i = 0; i < 3; i++){
          if(i >= offset){
            HourlyForcastValue.hour.push(hourlyTime%24);
            HourlyForcastValue.temp.push(parseInt(data.temp));
            HourlyForcastValue.icon.push(data.weatherIcon);
            HourlyForcastValue.description.push(data.weatherDescription);
            hourlyTime++;
          }
          offset = 0;
        }
      });
    }
    console.log(HourlyForcastValue);
    console.log(forcastDay1);
    console.log(forcastDay2);



  }

  handleRightClick = ()=>{
    var el = document.getElementById('scrollContainer');
    el.scrollLeft = el.scrollLeft + el.offsetLeft;
    if(el.scrollLeft >= el.scrollLeftMax){
      this.setState({visibilityRight: "collapse"});
    }else{
      this.setState({visibilityLeft: ""});
    }
  }

  handleLeftClick = ()=>{
    var el = document.getElementById('scrollContainer');
    el.scrollLeft = el.scrollLeft - el.offsetLeft;
    if(el.scrollLeft <= 0){
      this.setState({visibilityLeft: "collapse"});
    }else{
      this.setState({visibilityRight: ""});
    }
  }

  render() {
      var id = "http://openweathermap.org/img/w/10n.png";
      var isVisible = "";
      this.getHourlyForecastValue();
    return (
      <div className="HourlyForcast">
        <div className="HourlyForcastMargin">
          <span style={{'fontWeight': '600', 'paddingRight': '15px', 'float': 'left'}}>{this.props.day}</span>
          <span style={{'float': 'left'}}>Today</span>
          <span style={{'float': 'right', 'paddingLeft': '25px'}}>10</span>
          <span style={{'float': 'right'}}>15</span>
        </div>
        <div className="Line LineBefore">&nbsp;</div>

        <div className="menu-wrapper">
          <div className="LeftArrow" style={{visibility: this.state.visibilityLeft}} onClick={this.handleLeftClick}>
              <img src={leftArrow} className="imgArrow"></img>
          </div>
          <div className="inner" id="scrollContainer">
            <div className="HourlyForcastCard">
                <div style={{'margin': '-3px 0px'}}>15</div>
                <img src={id}></img>
                <div >15&deg;</div>
            </div>
            <div className="HourlyForcastCard">
                <div style={{'margin': '-3px 0px'}}>16</div>
                <img src={id}></img>
                <div >15&deg;</div>
            </div>
            <div className="HourlyForcastCard">
                <div style={{'margin': '-3px 0px'}}>17</div>
                <img src={id}></img>
                <div >15&deg;</div>
            </div>
            <div className="HourlyForcastCard">
                <div style={{'margin': '-3px 0px'}}>18</div>
                <img src={id}></img>
                <div >15&deg;</div>
            </div>
            <div className="HourlyForcastCard">
                <div style={{'margin': '-3px 0px'}}>19</div>
                <img src={id}></img>
                <div >15&deg;</div>
            </div>
            <div className="HourlyForcastCard">
                <div style={{'margin': '-3px 0px'}}>20</div>
                <img src={id}></img>
                <div >15&deg;</div>
            </div>
            <div className="HourlyForcastCard">
                <div style={{'margin': '-3px 0px'}}>21</div>
                <img src={id}></img>
                <div >15&deg;</div>
            </div>
            <div className="HourlyForcastCard">
                <div style={{'margin': '-3px 0px'}}>22</div>
                <img src={id}></img>
                <div >15&deg;</div>
            </div>
            <div className="HourlyForcastCard">
                <div style={{'margin': '-3px 0px'}}>23</div>
                <img src={id}></img>
                <div >15&deg;</div>
            </div>
            <div className="HourlyForcastCard">
                <div style={{'margin': '-3px 0px'}}>24</div>
                <img src={id}></img>
                <div >15&deg;</div>
            </div>
          </div>
          <div className="RightArrow">
              <img src={rightArrow} className="imgArrow" onClick={this.handleRightClick} style={{visibility: this.state.visibilityRight}}></img>
          </div>
        </div>
        <div className="Line LineAfter">&nbsp;</div>
      </div>
    );
  }
}

export default HourlyForcast;
