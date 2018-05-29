import React from 'react';
import ReactDOM from 'react-dom';

class Title extends React.Component{
  render() {

    return (
      <div className="Title">
        <div className="Location">Auckland</div>
        <div className="Description">Mostly Sunny</div>
        <div className="Degree">15<span className="DegreeSymbol">&deg;</span></div>
      </div>
    );
  }
}

export default Title;
