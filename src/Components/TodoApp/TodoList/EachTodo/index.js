import React,{Component} from 'react'
class EachTodo extends Component{
    handleClick=()=>{
        this.props.todo.toggleTodo()
    }
render(){
    return(
        <>
        <input data-testid="checkbox" type="checkbox" onClick={this.handleClick} />
        </>
    )
}
}
export default EachTodo