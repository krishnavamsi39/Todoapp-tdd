import React,{Component } from 'react'
import todoFilterTypes from '../../../../Constants/todoFilter'
class TodoFooter extends Component{
    handleClickAll=()=>{
        this.props.todoStore.changeFilter(todoFilterTypes.all)

    }
    handleClickCompleted=()=>{
        this.props.todoStore.changeFilter(todoFilterTypes.completed)
    }
render(){
   
    return(
        <>
        <button data-testid={todoFilterTypes.all} onClick={this.handleClickAll}/>
       <button data-testid={todoFilterTypes.completed} onClick={this.handleClickCompleted}/>

        </>
    )
}
}
export default TodoFooter