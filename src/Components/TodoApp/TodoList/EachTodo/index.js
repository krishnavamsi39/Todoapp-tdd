import React,{Component} from 'react'
class EachTodo extends Component{
    handleClick=()=>{
        this.props.todo.toggleTodo()
    }
    handleDelete=()=>{
        this.props.todoStore.deleteTodo(this.props.todo.id)
    }
render(){
    return(
        <>
        <input data-testid="checkbox" type="checkbox" onClick={this.handleClick} />
        <button data-testid="delete-todo" onClick={this.handleDelete}/>
        </>
    )
}
}
export default EachTodo