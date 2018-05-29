import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';
import HourlyForcast from './HourlyForcast';
import FutureForcast from './FutureForcast';

class EachDayCard extends React.Component{

  render() {

    return (
        <div className="EachDayFrame">
          <Title allForcast= {this.props.allForcast} hour={this.props.hour}/>
          <HourlyForcast allForcast= {this.props.allForcast} day={this.props.day} hour={this.props.hour}  minMaxTemp={this.props.minMaxTemp}/>
          <FutureForcast/>
        </div>
    );
  }
}

export default EachDayCard;
