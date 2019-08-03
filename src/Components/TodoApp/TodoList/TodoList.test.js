import {render,cleanup, fireEvent} from '@testing-library/react'
import React from 'react'
import TodoList from './index'
import TodoStore from '../../../Store/TodoStore'
afterEach(cleanup);
describe('test for list of todos',()=>{
    it('should render list of todos',()=>{
        const todoStore=new TodoStore()
        todoStore.addTodo("mobx")
        todoStore.addTodo("react")
        const {getAllByTestId}=render(<TodoList />)

        
    })
})