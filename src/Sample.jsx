import React from "react";

class Sample extends React.Component{
constructor(props){
    super(props)
   this.state={a:10}
}
componentDidMount(){

}
render()
{
    return (
        <div>
            <h1>class  Component </h1>
            <p>{this.state.a}</p>
            <p>{this.props.res}</p>
        </div>
      
    )
}

}
export default Sample