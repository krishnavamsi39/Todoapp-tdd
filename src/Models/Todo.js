import {observable,action} from 'mobx'
class Todo{
    @observable isCompleted
    @observable text
    constructor(  message,id, completed) {
        this.text = message;
        this.id = id;
       
        this.isCompleted = completed;
      }
    @action 
    toggleTodo(){
        this.isCompleted=!this.isCompleted
    }
    @action
    updateTodoText(newText){
        this.text=newText

    }

}
export default Todo