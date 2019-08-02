import {observable,action,computed} from 'mobx'
class TodoStore{
    @observable todos=[]
    @observable currentFilter="all"
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
@action changeFilter(filter){
this.currentFilter=filter
}
@computed get
 itemsLeft(){

}
}
export default TodoStore