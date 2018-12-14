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
                title:'NIKE SHOES',
                prix : 70.99,
                color:'red',
                description:'WHAT A GREATE SHOES THE RED ONE',
                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQReVAnUv74XBHryuLf0zNrRIrFSg2qwQgTJ4iKSoL4fTryib5-Ew',
                    
            },
            {
                title:'NIKE SHOES',
                prix : 89.99,
                color:'green',
                description:'WHAT A GREATE SHOES THE GREEN ONE',
                image:'http://s3.amazonaws.com/nike-demo/assets/37690/Nike_EARL_Profile_square_1600.jpg',
                    
            },
            {
                title:'NIKE SHOES',
                prix : 90.99,
                color:'#c1c4c0',
                description:'WHAT A GREATE SHOES THE GREEY ONE',
                image:'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/wokkcny4zbhvzobfwc7i/air-presto-womens-shoe-89Tqz1nG.jpg',        
            }
        ],
        prod:{},
        card:0
    }
  }

  componentDidMount(){
      this.setState({
            prod:this.state.prods[0]
        });
  }
  changePrice(index){
      let prod = this.state.prods[index];
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
            <Slider image={this.state.prod.image}/>
            <ProdExcription 
                prod={this.state.prod}
                prods = {this.state.prods}
                changePrice={(prix)=>this.changePrice(prix)} 
                addToCard={()=>this.addToCard()}    
            /> 
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
