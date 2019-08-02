import Todo from "./Todo";

describe('TodoModel functionality ',() =>{
    let todoModel
    beforeEach(()=>{
       todoModel=new Todo("tdd",1,false)
     
    })
it('should toggle a todo',()=>{
    
    expect(todoModel.isCompleted).toBe(false)
    todoModel.toggleTodo()
    expect(todoModel.isCompleted).toBe(true)

  })
  it('should update a todo text',()=>{
      expect(todoModel.text).toBe("tdd")
      todoModel.updateTodoText("react")
  })
})