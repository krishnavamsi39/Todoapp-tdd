

import TodoStore from  './TodoStore'


describe('TodoStore functionality ',() =>{

   it('add a todo',()=>{
    const todoStore= new TodoStore()
        expect(todoStore.todos.length).toBe(0)
        todoStore.addTodo("test driven development")
        expect(todoStore.todos.length).toBe(1)
       expect(todoStore.todos[0].text).toBe("test driven development")
        expect(todoStore.todos[0].isCompleted).not.toBe(true)   
    })
  it('delete a todo',()=>{
      const todoStore=new TodoStore()
      expect(todoStore.todos.length).toBe(0)
      todoStore.addTodo("tdd")
      todoStore.deleteTodo(1)
      expect(todoStore.todos.length).toBe(0)
  })
  
})
