import '@testing-library/jest-dom/extend-expect';
 import React from "react";
import { cleanup, getByTestId, render, screen } from "@testing-library/react";
import Header from './header'
import Json from './RawJson'
import App from '../App'
 
const rawData = {
    "title": "freecode",
    "url": "www.freecodecamp.com",
    "author": "jhon",
    "created_at": "11-06-2011",
  };

test('Test to render App',()=>{
            render(<App></App>)
           screen.debug()
         
})


  
describe('testing header component ',()=>{
    render(<Header></Header>)
    expect(screen.getByText(/list data/i)).toBeInTheDocument()
    expect(screen.getByText(/list data/i)).toHaveClass('heading')
    expect(screen.getByText(/list data/i)).toHaveAttribute('class')
    expect(screen.getByText(/title/i)).toHaveTextContent('title')
})

describe('testing rawJSon without any props ',()=>{
    test('rawJson',()=>{
        render(<Json ></Json>)
       
        expect(screen.getByTestId('main-button')).toHaveAttribute('class');
       
    
      
    })
     
  })
  

describe('testing rawJSon with props ',()=>{
  test('rawJson',()=>{
      render(<Json {...rawData} setShow={true}></Json>)
     
      expect(screen.getByTestId('main-button')).toHaveClass('btn');
      expect(screen.getByTestId('main-button')).toHaveTextContent('back to main page')
     
  
    
  })
   
})


describe('snapshot testing ',()=>{

    test('rawJson',()=>{
        const {container} =render(
           <Json {...rawData} setShow={true}></Json>
        );
        expect(container).toMatchSnapshot()
       
        
       
    
      
    })
     
  })
  
  