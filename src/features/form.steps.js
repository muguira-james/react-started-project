
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { defineFeature, loadFeature } from 'jest-cucumber'

import FormContainer from '../components/FormContainer'

const feature = loadFeature('./src/features/form.feature')

defineFeature(feature, test => {
    test('draw a form', ( { given, when, then } ) => {

        given('I have a page', () => {

        })
        when('the form is drawn', () => {

        })
        then('the props are correct', () => {
            const wrapper = shallow(<FormContainer title="foo" />)
            const inst = wrapper.instance()
    
            expect(inst.props.title).toEqual('foo')
        })
    })
})