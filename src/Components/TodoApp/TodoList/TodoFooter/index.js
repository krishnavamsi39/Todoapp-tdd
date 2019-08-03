import React,{Component } from 'react'
import todoFilterTypes from '../../../../Constants/todoFilter'
import {observer} from 'mobx-react'
@observer
class TodoFooter extends Component{
    handleClickAll=()=>{
        this.props.todoStore.changeFilter(todoFilterTypes.all)

    }
    handleClickCompleted=()=>{
        this.props.todoStore.changeFilter(todoFilterTypes.completed)
    }
    handleClickActive=()=>{
        this.props.todoStore.changeFilter(todoFilterTypes.active)

    }
    handleClear=()=>{
        this.props.todoStore.clearCompleted()
    }
render(){
   
    return(
        <div>
        <button data-testid={todoFilterTypes.all} onClick={this.handleClickAll}>All</button>
       <button data-testid={todoFilterTypes.active} onClick={this.handleClickActive}>Active</button>
       <button data-testid={todoFilterTypes.completed} onClick={this.handleClickCompleted}>Completed</button>

       <button data-testid="clear" onClick={this.handleClear}>ClearCompleted</button>

        </div>
    )
}
}
export default TodoFooter