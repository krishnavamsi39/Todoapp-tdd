import React, { Component } from "react";
import EnterTodo from './EnterTodo'
import TodoList from "./TodoList";
import {observer} from "mobx-react"

@observer
class TodoApp extends Component{
onKeyPressEnter=(todoText)=>{
    this.props.todoStore.addTodo(todoText)
}
render(){
    return(
        <>
        <EnterTodo onKeyPressEnter={this.onKeyPressEnter} defaultText=""/>
        <TodoList todoStore={this.props.todoStore} />
        
        </>
    )
}
}
export default TodoApp