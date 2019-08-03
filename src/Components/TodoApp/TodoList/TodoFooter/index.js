import React,{Component } from 'react'
import todoFilterTypes from '../../../../Constants/todoFilter'
class TodoFooter extends Component{
    handleClickAll=()=>{
        this.props.todoStore.changeFilter(todoFilterTypes.all)

    }
render(){
   
    return(
        <>
        <button data-testid={todoFilterTypes.all} onClick={this.handleClickAll}/>
       

        </>
    )
}
}
export default TodoFooter