import React, { Component } from "react";
import EnterTodo from './EnterTodo'
import TodoList from "./TodoList";

class TodoApp extends Component{
onKeyPressEnter=(todoText)=>{
    this.props.todoStore.addTodo(todoText)
}
render(){
    return(
        <>
        <EnterTodo onKeyPressEnter={this.onKeyPressEnter}/>
        <TodoList todoStore={this.props.todoStore}/>
        
        </>
    )
}
}
export default TodoApp