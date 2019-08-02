import {render,cleanup} from '@testing-library/react'
import React from 'react'
import EnterTodo from './index'

describe('test for EnterTodo Component',()=>{
    it('should check input box',()=>{
    const {getByPlaceholderText}=render(<EnterTodo />)
    const todoText=getByPlaceholderText("what needs to be done")
    })
})