import React, { Component } from "react";
import EnterTodo from './EnterTodo'
import todoStore from '../../Store/instances'

class TodoApp extends Component{
onKeyPressEnter=(todoText)=>{
    todoStore.addTodo(todoText)
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