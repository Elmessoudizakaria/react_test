import React,{Component} from 'react';
import BrandOptions from './brandOptions.component.jsx';
class ProdExcription extends Component{
    render(){
        return(
            <div className="description">
                <div className="des_title">
                    <h2>{this.props.prod.title}</h2>
                </div>
                <div className="des_prix">
                    <h2>{this.props.prod.prix} <small>$</small></h2>
                </div>
                <div className="des_content">
                    <p>
                      {this.props.prod.description}
                    </p>
                </div>
                <BrandOptions prods={this.props.prods} changePrice={(r)=>this.props.changePrice(r)}/>
                <div className="add_card">
                    <button className="button1" onClick={(e)=>this.props.addToCard()}>ADD TO CARD</button>
                </div>
            </div>
        );
    }
}
export default ProdExcription;