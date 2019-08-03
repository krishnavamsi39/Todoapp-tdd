import React,{Component} from 'react'
import EachTodo from './EachTodo';
class TodoList extends Component{
    renderTodoItems=()=>{
       const rows= this.props.todoStore.todos.map(todo=>{
        return <EachTodo todo={todo} key={todo.id}/>
        })
        return rows
    }
render(){
    return(
        <>
        {this.renderTodoItems()}
        </>
    )
}
}
export default TodoList