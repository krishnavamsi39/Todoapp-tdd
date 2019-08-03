import React,{Component} from 'react'
import EnterTodo from '../../EnterTodo';
import {observer} from "mobx-react"

@observer
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
       if( window.confirm("Do you want to delete"))
        this.props.todoStore.deleteTodo(this.props.todo.id)
    }
    handleUpdate=(message)=>{

        this.props.todo.updateTodoText(message)
        this.setState({isEditable:false})
    }
    handleEditableText=()=>{
       
        if(!this.state.isEditable){
            if(!this.props.todo.isCompleted)
            return <span data-testid="double-click" onDoubleClick={this.handleDoubleClick}>{this.props.todo.text}</span>
            else
            return <strike >{this.props.todo.text}</strike>

        }
        else{
            return <EnterTodo onKeyPressEnter={this.handleUpdate} defaultText={this.props.todo.text}/>
        }
    }
render(){
    return(
        <div>
        <input data-testid="checkbox" type="checkbox" checked={this.props.todo.isCompleted} onChange={this.handleClick} />
        {this.handleEditableText()}
        <button data-testid="delete-todo" onClick={this.handleDelete}>x</button>
        </div>
    )
}
}
export default EachTodo