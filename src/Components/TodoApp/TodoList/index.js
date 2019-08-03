import React,{Component} from 'react'
import EachTodo from './EachTodo';
import {observer} from "mobx-react"
import {Div} from "./styledComponents"
import TodoFooter from './TodoFooter'
@observer
class TodoList extends Component{
    renderTodoItems=()=>{
        console.log(this.props.todoStore.todos)
        const {todoStore}=this.props
       
       const rows= todoStore.filterTodo.map(todo=>{
        return <EachTodo todoStore={todoStore} todo={todo} key={todo.id}/>
        })
        return rows
    }
render(){
    return(
        <Div>
        {this.renderTodoItems()}
        <TodoFooter  todoStore={this.props.todoStore}/>
        </Div>
    )
}
}
export default TodoList