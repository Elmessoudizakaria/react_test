import React, { Component } from 'react';
import './App.css';
import * as shop from './img/shopping-cart.png';
import Slider from './slider.component.jsx';
import ProdExcription from './prodExcription.component.jsx';
import axios from 'axios';
class App extends Component {
  constructor(){
    super();
    this.state={
        prods:[],
        prod:{},
        title:'',
        card:0
    }
  }

  componentDidMount(){
        axios.get('http://localhost:8080/shoes').then(res=>{
            this.setState({
                prod:res.data[0].opt[0],
                prods:res.data[0].opt,
                title: res.data[0].title
            });
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
            <Slider image={this.state.prod.urlImage}/>
            <ProdExcription
                title={this.state.title}
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
