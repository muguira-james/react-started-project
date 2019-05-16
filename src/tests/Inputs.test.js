import React from 'react'

import { shallow } from 'enzyme'

import Inputs from '../components/Inputs'

describe('Test the Input component', () => {

    let handleChange = null

    beforeEach(() => {
        handleChange = jest.fn()
    })
    it('should have correct props', () => {
        const wrapper = shallow(
            <Inputs
                text="Some Text"
                label="seo_title"
                type="text"
                id="input_title"
                value="enter your Mr Spock quote"
                handleChange={handleChange}
            />
        )
        
        const thingy = wrapper.instance()
        
        expect(thingy.props.text).toEqual('Some Text')
        expect(thingy.props.label).toEqual('seo_title')
        expect(thingy.props.id).toEqual('input_title')
        expect(thingy.props.value).toEqual('enter your Mr Spock quote')
    })
    it('test: make sure the call back is driven', () => {
        const wrapper = shallow(
            <Inputs
                text="Some Text"
                label="seo_title"
                type="text"
                id="input_title"
                value="enter your Mr Spock quote"
                handleChange={handleChange}
            />)

        // console.log("wrapper-->", wrapper.debug())
        const thingy = wrapper.find('#input_title').simulate('change')

        expect(handleChange).toHaveBeenCalled()
    });


})