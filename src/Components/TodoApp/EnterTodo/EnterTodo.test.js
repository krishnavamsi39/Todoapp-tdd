import {render,cleanup, fireEvent} from '@testing-library/react'
import React from 'react'
import EnterTodo from './index'
afterEach(cleanup)
describe('test for EnterTodo Component',()=>{
    it('should check input box and should not enter empty text',()=>{
        const onKeyPressEnter=jest.fn()
    const {getByPlaceholderText}=render(<EnterTodo onKeyPressEnter={onKeyPressEnter} defaultText=""/>)
    const todoText=getByPlaceholderText("what needs to be done")
    expect(todoText).toBeDefined()
    const keyDownEvent={
        key:"Enter",
        code:13,
        keyCode:13
    }
    fireEvent.keyDown(todoText,keyDownEvent)
    expect(onKeyPressEnter).not.toBeCalled()

    })
    it('should check todo text value change and submit ',()=>{
        const onKeyPressEnter=jest.fn()
        const {getByPlaceholderText}=render(<EnterTodo onKeyPressEnter={onKeyPressEnter} defaultText=""/>)
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