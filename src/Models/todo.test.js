import Todo from "./Todo";

describe('TodoModel functionality ',() =>{
it('should toggle a todo',()=>{
    const todoModel=new Todo("ttd",1,false)
    expect(todoModel.isCompleted).toBe(false)
    todoModel.toggleTodo()
  })
})