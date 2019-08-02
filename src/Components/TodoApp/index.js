import React, { Component } from "react";
import EnterTodo from './EnterTodo'

class TodoApp extends Component{
onKeyPressEnter=(todoText)=>{
    this.props.todoStore.addTodo(todoText)
}
render(){
    return(
        <>
        <EnterTodo onKeyPressEnter={this.onKeyPressEnter}/>
        </>
    )
}
}
export default TodoApp