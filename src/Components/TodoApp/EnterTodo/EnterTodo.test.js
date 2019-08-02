import {render,cleanup, fireEvent} from '@testing-library/react'
import React from 'react'
import EnterTodo from './index'
afterEach(cleanup)
describe('test for EnterTodo Component',()=>{
    it('should check input box',()=>{
    const {getByPlaceholderText}=render(<EnterTodo />)
    const todoText=getByPlaceholderText("what needs to be done")
    expect(todoText).toBeDefined()

    })
    it('should check todo text value change and submit ',()=>{
        const onKeyPressEnter=jest.fn()
        const {getByPlaceholderText}=render(<EnterTodo onKeyPressEnter={onKeyPressEnter}/>)
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
        expect(onKeyPressEnter).toHaveBeenCalledWith("react")
        })
})