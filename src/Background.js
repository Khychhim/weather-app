import React from 'react';
import ReactDOM from 'react-dom';

class Background extends React.Component{
  constructor(){
    super();
    this.state = {
      temperature: []
    };
  }

  componentDidMount(){
    // fetch('http://api.openweathermap.org/data/2.5/forecast?q=Phnom+Penh,KH&appid=94ac1c60f100aab09a0e604997099be1&units=metric')
    // .then(results =>{
    //   return results.json();
    // }).then(data =>{
    //   let temperature = data.results.map((temp)=>
    //   return{
    //     temp.
    //   }
    // })
  }

  render() {
    return (
      <div />
    );
  }
}

export default Background;
