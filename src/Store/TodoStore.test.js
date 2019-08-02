

import TodoStore from  './TodoStore'

import todoFilterTypes from '../Constants/todoFilter'
describe('TodoStore functionality ',() =>{
  let todoStore
  beforeEach(()=>{
     todoStore=new TodoStore()
   todoStore.addTodo("react")
   todoStore.addTodo("mobx")
   todoStore.addTodo("styled-components")
  })

   it('add a todo',()=>{
        expect(todoStore.todos.length).toBe(3)
        todoStore.addTodo("test driven development")
        expect(todoStore.todos.length).toBe(4)
       expect(todoStore.todos[3].text).toBe("test driven development")
         
    })
  it('delete a todo',()=>{
      expect(todoStore.todos.length).toBe(3)
      todoStore.deleteTodo(1)
      expect(todoStore.todos.length).toBe(2)
     
      todoStore.deleteTodo(2)
      expect(todoStore.todos.length).toBe(1)
  })
  it('clear completed',()=>{
    expect(todoStore.todos.length).toBe(3)
    todoStore.todos[0].isCompleted=true 
    todoStore.clearCompleted()
    expect(todoStore.todos.length).toBe(2)
    expect(todoStore.todos[0].text).toBe("mobx")
    todoStore.todos[1].isCompleted=true
    todoStore.clearCompleted()
    expect(todoStore.todos[0].text).toBe("mobx")

  })
  it('update Filter',()=>{
   expect(todoStore.currentFilter).toBe(todoFilterTypes.all)
   todoStore.changeFilter(todoFilterTypes.all)
   expect(todoStore.currentFilter).toBe(todoFilterTypes.all)
   
   todoStore.changeFilter(todoFilterTypes.active)
   expect(todoStore.currentFilter).toBe(todoFilterTypes.active)

   todoStore.changeFilter(todoFilterTypes.completed)
   expect(todoStore.currentFilter).toBe(todoFilterTypes.completed)

  })
  it('items left',()=>{
    expect(todoStore.itemsLeft).toBe(3)
    todoStore.todos[0].isCompleted=true 
    expect(todoStore.itemsLeft).toBe(2)
    todoStore.todos[1].isCompleted=true 
    expect(todoStore.itemsLeft).toBe(1)
    todoStore.todos[1].isCompleted=false 
    expect(todoStore.itemsLeft).toBe(2)

   })
   it('filter todo',()=>{
     expect(todoStore.filterTodo.length).toBe(3)
   todoStore.changeFilter(todoFilterTypes.all)
   expect(todoStore.filterTodo.length).toBe(3)
   todoStore.changeFilter(todoFilterTypes.completed)
   expect(todoStore.filterTodo.length).toBe(0)
   todoStore.todos[0].isCompleted=true 
   expect(todoStore.filterTodo.length).toBe(1)
   todoStore.changeFilter(todoFilterTypes.active)
   expect(todoStore.filterTodo.length).toBe(2)
   todoStore.todos[1].isCompleted=true 
   expect(todoStore.filterTodo.length).toBe(1)





   })
})
