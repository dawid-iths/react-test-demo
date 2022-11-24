import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import { SubmitButton } from '../submit/submitButton';
import { IButtonProps } from '../../../Interfaces/IButtonProps';


describe('Button tests', () => {
  
  //arrange
  const consoleLogMessage = "Submit button clicked";
  const buttonProps: IButtonProps = {
    color: "red", 
    border:"1px solid black",
    radius:"5px", 
    height:"50px", 
    width:"100px", 
    fontSize:"20px", 
    onClick:() => { console.log(consoleLogMessage) }
  };

  test('Testing submit button to be enabled', () => {

    //arrange

    //act
    render(<SubmitButton {...buttonProps}> submit-test </SubmitButton>);
    const button = screen.getByTestId('submit-button');

    //assert
    expect(screen.getByTestId('submit-button')).toBeEnabled();
  });

test('Testing submit button to be in document', () => {

    //arrange

    //act
    render(<SubmitButton {...buttonProps}> submit-test </SubmitButton>);
    const button = screen.getByTestId('submit-button');

    //assert
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  test('Testing submit button triggers onclick', () => {

    //arrange

    //act
    render(<SubmitButton {...buttonProps}> submit-test </SubmitButton>);
    const button = screen.getByTestId('submit-button');
    const spyButton = jest.spyOn(button, 'click');
    const spyConsole = jest.spyOn(console, 'log');
    
    act(() => button.click());

    //assert
    expect(spyButton).toHaveBeenCalled();
    expect(spyConsole).toHaveBeenCalled();

    expect(spyConsole).toBeCalled();
    expect(spyConsole).toHaveBeenCalledWith(consoleLogMessage)

    spyButton.mockReset();
    spyButton.mockRestore();
    spyConsole.mockReset();
    spyConsole.mockRestore();
  });
});