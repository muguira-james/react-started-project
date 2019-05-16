import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import FormContainer from '../components/FormContainer'

describe('Test the form', () => {
    it('has the right props', () => {
        const wrapper = shallow(<FormContainer title="foo" />)
        const inst = wrapper.instance()

        expect(inst.props.title).toEqual('foo')
      });


})