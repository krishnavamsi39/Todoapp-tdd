import {render,cleanup, fireEvent} from '@testing-library/react'
import React from 'react'
import TodoApp from './index'
import todoStore from '../../Store/instances'

afterEach(cleanup)
describe('test for TodoApp component',()=>{
    it('should check if add todo funtion called from store',()=>{
        jest.spyOn(todoStore,'addTodo')

        const {getByPlaceholderText}=render(<TodoApp todoStore={todoStore} />)
        const todoText=getByPlaceholderText("what needs to be done")
        const changeEvent={
            target:{
                value:"react"
            }
        }
        fireEvent.change(todoText,changeEvent)
        const keyDownEvent={
            key:"Enter",
            code:13,
            keyCode:13
        }
        fireEvent.keyDown(todoText,keyDownEvent)
        expect(todoStore.addTodo).toHaveBeenCalledWith("react")

    })
})