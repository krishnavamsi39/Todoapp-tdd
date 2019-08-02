import {observable,action} from 'mobx'
class TodoStore{
    @observable todos=[]
    id=1
   @action addTodo(todoText){
        const obj={
            text:todoText,
            id:this.id,
            isCompleted:false
        }
        this.todos.push(obj)
        this.id+=1

    }
   @action deleteTodo(id){
        this.todos= this.todos.filter(obj => obj.id !== id)
    }
   @action clearCompleted(){
        this.todos=this.todos.filter(obj=>!obj.isCompleted)
    }

}
export default TodoStore