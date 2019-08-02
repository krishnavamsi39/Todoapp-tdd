import React,{Component} from 'react'
class EachTodo extends Component{
    handleClick=()=>{
        this.props.todo.toggleTodo()
    }
    handleDelete=()=>{

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