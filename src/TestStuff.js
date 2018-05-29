import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class TestStuff extends React.Component{
  render() {
    return (
      <div>
        Hello {this.props.test}
        <ul>
          <li><Link to="/yea">{this.props.test}</Link></li>
          <li>{this.props.test} 2</li>
          <li>{this.props.test} 3</li>
        </ul>
      </div>
    );
  }
}

export default TestStuff;
