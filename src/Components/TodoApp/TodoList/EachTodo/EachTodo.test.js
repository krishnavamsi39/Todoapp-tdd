import {render,cleanup, fireEvent} from '@testing-library/react'
import React from 'react'
import EachTodo from './index'
import Todo from '../../../../Models/Todo'
import TodoStore from '../../../../Store/TodoStore'
afterEach(cleanup)
describe('Test for EachTodo Component',()=>{
    it('should check the checkbox',()=>{
        const todo=new Todo("mobx",1,false)
        jest.spyOn(todo,'toggleTodo')
        const {getByTestId}=render(<EachTodo todo={todo}/>)
        const todoCompleted=getByTestId("checkbox")
        fireEvent.click(todoCompleted)
        expect(todo.toggleTodo).toHaveBeenCalled()
    })
    it('should delete a todo from list of todos',()=>{
        const todoStore=new TodoStore()
        jest.spyOn(todoStore,'deleteTodo')
        todoStore.addTodo("react")
        const {getByTestId}=render(<EachTodo todo={todoStore.todos[0]}todoStore={todoStore}/>)
        const deleteTodo=getByTestId("delete-todo")
        fireEvent.click(deleteTodo)
        expect(todoStore.deleteTodo).toHaveBeenCalled()
        expect(todoStore.todos.length).toBe(0)
    })
    it('should become editable text on double click and text should change on clicking enter key',()=>{
        const todo=new Todo("mobx",1,false)
        jest.spyOn(todo,'updateTodoText')
        const {getByTestId}=render(<EachTodo todo={todo}/>)
        const editableText=getByTestId("double-click")
        fireEvent.dblClick(editableText)
        


    })
})