import React, { Component } from "react";
class EnterTodo extends Component{
    constructor(props){
        super(props)
        this.state={todoText:this.props.defaultText}
    }
    handleChange=(e)=>{
        this.setState({todoText:e.target.value})
    }
    handleKeyDown=(e)=>{
        if(e.keyCode===13 ){
        this.props.onKeyPressEnter(this.state.todoText)
        this.setState({todoText:""})
        }

    }
render(){
    return(
       
        <input type="text" value={this.state.todoText} onChange={this.handleChange} onKeyDown={this.handleKeyDown} placeholder="what needs to be done"/>
        
    )
}
}
export default EnterTodo