

import TodoStore from  './TodoStore'


describe('TodoStore functionality ',() =>{

   it('add a todo',()=>{
    const todoStore= new TodoStore()

        expect(todoStore.todos.length).toBe(0)
         
    })
  
  
})
