import React, { Component } from 'react';
import './App.css';
import * as shop from './img/shopping-cart.png';
import Slider from './slider.component.jsx';
import ProdExcription from './prodExcription.component.jsx';
class App extends Component {
  constructor(){
    super();
    this.state={
        prod:{
            title:'BIJOUX PANDORE',
            prix : 80.99,
            description:'WHAT A GREATE ACCESSOIRS. WHAT A GREATE ACCESSOIRS.',
            images:[]
        }
    }
  }
  render() {
    return (
      <div className="container">
        <div className="card">
           <Slider />
            <ProdExcription prod={this.state.prod}/>
            <div className="fab">
              <img src={shop} alt="shop"/>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
