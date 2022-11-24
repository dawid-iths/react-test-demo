import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import { SubmitButton } from '../../buttons/submit/submitButton';


describe('Button tests', () => {

  test('Testing submit button', () => {
    render(
        <SubmitButton color="red" 
        border="1px solid black" 
        radius="5px" 
        height="50px" 
        width="100px" 
        fontSize="20px" 
        onClick={() => { console.log("clicked") }}
        />
    );
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeEnabled();
  });
});