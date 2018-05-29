import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';
import HourlyForcast from './HourlyForcast';
import FutureForcast from './FutureForcast';

class EachDayCard extends React.Component{

  render() {
    // const allForcast = this.props.allForcast;
    //
    // console.log(allForcast);
    return (
        <div className="EachDayFrame">
          <Title/>
          <HourlyForcast allForcast= {this.props.allForcast} day={this.props.day} hour={this.props.hour}/>
          <FutureForcast/>
        </div>
    );
  }
}

export default EachDayCard;
