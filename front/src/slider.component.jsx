import React,{Component} from 'react';

class Slider extends Component{
    render(){
        return(
            <div className="slider">
                {this.props.prods.map((item,i)=>{
                    const divClass = "slide"+(i+1);
                    return(
                        <div className={divClass}>
                            <img className="slide_img" src={item.image}/>
                       </div>
                    )
                })}
               {/* {this.props.images.map((image,i)=>{
                   const divClass = "slide"+(i+1);
                   return(
                       <div className={divClass}>
                            <img  className="slide_img" src={image}/>
                       </div>
                   )
               })} */}
            </div>
        );
    }
}
export default Slider;