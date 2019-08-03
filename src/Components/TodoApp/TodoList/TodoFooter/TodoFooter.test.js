import {render,cleanup, fireEvent} from '@testing-library/react'
import React from 'react'
import TodoFooter from './index'
import TodoStore from '../../../../Store/TodoStore'
import todoFilterTypes from '../../../../Constants/todoFilter'
afterEach(cleanup)
describe('test for todofooter component',()=>{
    it('should test if filter value is changing',()=>{
        const todoStore=new TodoStore()
        jest.spyOn(todoStore,'changeFilter')
        const {getByTestId}=render(<TodoFooter todoStore={todoStore}/>)
        const allbutton=getByTestId(todoFilterTypes.all)
        fireEvent.click(allbutton)
        expect(todoStore.changeFilter).toHaveBeenCalledWith(todoFilterTypes.all)
    })
})