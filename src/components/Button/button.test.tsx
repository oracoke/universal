import React from 'react';
import { render } from '@testing-library/react';
import Button from './button';

describe('test Button component', () => {
    it('should render the correct default button', () => {
        const wrapper = render(<Button>Nice</Button>)
        const elem = wrapper.getByText('Nice');
        expect(elem).toBeInTheDocument();
        expect(elem.tagName).toEqual('BUTTON');
        expect(elem).toHaveClass('btn btn-default');
    })
    it('should render the correct component based on different props', () => {

    })
    it('should render a link when btnType equals link and href is provide', () => {

    })
    it('should render disabled button when disabled set to true', () => {

    })
})