import React,{Component} from 'react';

class BrandOptions extends Component{
    render(){
        return(
            <div className="colors">
                {this.props.prods.map((color,i)=>{
                   return(
                        <div key={i} className="color_element" style={{backgroundColor:color.color}} onClick={()=>this.props.changePrice(i)}></div>
                   )
                })}
            </div>
        )
    }
}
export default BrandOptions;