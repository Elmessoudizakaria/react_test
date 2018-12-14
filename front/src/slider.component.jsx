import React,{Component} from 'react';

class Slider extends Component{
    render(){
        return(
            <div className="slider">
                <div>
                    <img className="slide_img" src={this.props.image}/>
                </div>
                {/* {this.props.prods.map((item,i)=>{
                    const divClass = "slide"+(i+1);
                    return(
                        <div className={divClass}>
                            <img className="slide_img" src={item.image}/>
                       </div>
                    )
                })} */}
            </div>
        );
    }
}
export default Slider;