import {render,cleanup, fireEvent} from '@testing-library/react'
import React from 'react'
import TodoApp from './index'
afterEach(cleanup)
describe('test for TodoApp component',()=>{
    it('should check if add todo funtion called from store',()=>{
        const {getByPlaceholderText}=render(<TodoApp />)
        const todoText=getByPlaceholderText("what needs to be done")
    })
})