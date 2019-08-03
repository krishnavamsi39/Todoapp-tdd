import React,{Component} from 'react'
import EnterTodo from '../../EnterTodo';
class EachTodo extends Component{
    constructor(props){
        super(props)
        this.state={isEditable:false}
    }
    handleDoubleClick=()=>{
        this.setState({isEditable:true})
    }
    handleClick=()=>{
        this.props.todo.toggleTodo()
    }
    handleDelete=()=>{
        this.props.todoStore.deleteTodo(this.props.todo.id)
    }
    handleUpdate=(message)=>{
        this.props.todo.updateTodoText(message)
    }
    handleEditableText=()=>{
        if(!this.state.isEditable){
            return <span data-testid="double-click" onDoubleClick={this.handleDoubleClick}></span>
        }
        else{
            return <EnterTodo onKeyPressEnter={this.handleUpdate}/>
        }
    }
render(){
    return(
        <>
        <input data-testid="checkbox" type="checkbox" onClick={this.handleClick} />
        {this.handleEditableText()}
        <button data-testid="delete-todo" onClick={this.handleDelete}/>
        </>
    )
}
}
export default EachTodo