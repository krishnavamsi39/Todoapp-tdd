import {render,cleanup, fireEvent} from '@testing-library/react'
import React from 'react'
import EachTodo from './index'
import Todo from '../../../../Models/Todo'

afterEach(cleanup)
describe('Test for EachTodo Component',()=>{
    it('should check the checkbox',()=>{
        const todo=new Todo("mobx",1,false)
        jest.spyOn(todo,'toggleTodo')
        const {getByTestId}=render(<EachTodo />)
        const todoCompleted=getByTestId("checkbox")
        fireEvent.click(todoCompleted)
    })
})