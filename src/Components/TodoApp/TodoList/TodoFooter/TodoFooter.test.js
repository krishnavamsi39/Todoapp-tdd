import {render,cleanup, fireEvent} from '@testing-library/react'
import React from 'react'
import TodoFooter from './index'
import TodoStore from '../../../../Store/TodoStore'

afterEach(cleanup)
describe('test for todofooter component',()=>{
    it('should test if filter value is changing',()=>{
        const todoStore=new TodoStore()
        jest.spyOn(todoStore,'changeFilter')
        const {getAllByTestId}=render(<TodoFooter todoStore={todoStore}/>)

    })
})