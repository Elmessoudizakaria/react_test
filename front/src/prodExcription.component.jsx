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
                    <div className="color_element colors1"></div>
                    <div className="color_element colors2"></div>
                    <div className="color_element colors3"></div>
                    <div className="color_element colors4"></div>
                    <div className="color_element colors1"></div>
                    <div className="color_element colors2"></div>
                    <div className="color_element colors3"></div>
                    <div className="color_element colors4"></div>
                </div>
                <div className="add_card">
                    <button className="button1">ADD TO CARD</button>
                </div>
            </div>
        );
    }
}
export default ProdExcription;