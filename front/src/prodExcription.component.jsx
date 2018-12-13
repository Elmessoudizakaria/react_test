import React,{Component} from 'react';

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
                <div className="colors">
                    <div className="color_element colors1" onClick={()=>this.props.changePrice(99.99)}></div>
                    <div className="color_element colors2" onClick={()=>this.props.changePrice(98.99)}></div>
                    <div className="color_element colors3" onClick={()=>this.props.changePrice(90.99)}></div>
                </div>
                <div className="add_card">
                    <button className="button1" onClick={(e)=>this.props.addToCard()}>ADD TO CARD</button>
                </div>
            </div>
        );
    }
}
export default ProdExcription;