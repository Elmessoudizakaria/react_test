import React, { Component } from 'react';
import './App.css';
import * as shop from './img/shopping-cart.png';
import Slider from './slider.component.jsx';
import ProdExcription from './prodExcription.component.jsx';
class App extends Component {
  constructor(){
    super();
    this.state={
        prods:[
          {
            title:'BIJOUX PANDORE',
            prix : 80.99,
            description:'WHAT A GREATE ACCESSOIRS. WHAT A GREATE ACCESSOIRS.',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQReVAnUv74XBHryuLf0zNrRIrFSg2qwQgTJ4iKSoL4fTryib5-Ew',
                
          },
          {
            title:'BIJOUX PANDORE',
            prix : 80.99,
            description:'WHAT A GREATE ACCESSOIRS. WHAT A GREATE ACCESSOIRS.',
            image:'http://s3.amazonaws.com/nike-demo/assets/37690/Nike_EARL_Profile_square_1600.jpg',
                
          },
          {
            title:'BIJOUX PANDORE',
            prix : 80.99,
            description:'WHAT A GREATE ACCESSOIRS. WHAT A GREATE ACCESSOIRS.',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlA4iHOTepTDdVZl8iLqImrix67g1o13pHTZFeJICB8RvdNCXl3Qg',
                
          }
        ],
        prod:{
            title:'BIJOUX PANDORE',
            prix : 80.99,
            description:'WHAT A GREATE ACCESSOIRS. WHAT A GREATE ACCESSOIRS.',
            images:[
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQReVAnUv74XBHryuLf0zNrRIrFSg2qwQgTJ4iKSoL4fTryib5-Ew',
                'http://s3.amazonaws.com/nike-demo/assets/37690/Nike_EARL_Profile_square_1600.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlA4iHOTepTDdVZl8iLqImrix67g1o13pHTZFeJICB8RvdNCXl3Qg'
            ]
        },
        card:0
    }
  }
  changePrice(price){
      let prod = this.state.prod;
      prod.prix = price;
      this.setState({prod:prod});
  }
  addToCard(){
    let card = this.state.card;
    card++;
    this.setState({card:card});
  }
  render() {
    return (
      <div className="container">
        <div className="card">
           <Slider images={this.state.prod.images} prods={this.state.prods}/>
            <ProdExcription prod={this.state.prod} changePrice={(prix)=>this.changePrice(prix)} addToCard={()=>this.addToCard()}/>
            <div className="fab">
              <img src={shop} alt="shop"/>
              <small>{this.state.card}</small>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
