import {observable} from 'mobx'
class TodoStore{
    @observable todos=[]
    id=1
    addTodo(todoText){
        const obj={
            text:todoText,
            id:this.id,
            isCompleted:false
        }
        this.todos.push(obj)
        this.id+=1

    }
    

}
export default TodoStore