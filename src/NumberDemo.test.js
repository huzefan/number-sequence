import React from "react";
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import NumberDemo from "./NumberDemo";
import NumberList from "./NumberList";

describe("NumberDemo", () => {
    let numberDemo, numberList;

    beforeEach(() => {
        numberDemo = ReactTestUtils.renderIntoDocument( <NumberDemo /> );
        numberList = ReactTestUtils.renderIntoDocument( <NumberList sequence={[]} text="" /> );
    });

    it('isDivisibleBy', () => {
        expect(numberDemo.isDivisibleBy(16, 4)).toBeTruthy();
    });

    it('isEven', () => {
        expect(numberDemo.isEven(100)).toBeTruthy();  
    });

    it('isOdd', () => {
        expect(numberDemo.isOdd(101)).toBeTruthy();  
    });

    it('isDivisibleBy3', () => {
        expect(numberDemo.isDivisibleBy3(99)).toBeTruthy();  
    });        

    it('isDivisibleBy5', () => {
        expect(numberDemo.isDivisibleBy5(25)).toBeTruthy();  
    });

    it('isDivisibleBy3And5', () => {
        expect(numberDemo.isDivisibleBy3And5(15)).toBeTruthy();  
    });

    it('fibonacci', () => {
        const nums  = numberDemo.fibonacci(3);
        expect(nums[nums.length-1]).toBe(1);
    });    

    it('Component NumberDemo should exists', () => {
        expect(ReactTestUtils.isCompositeComponent(numberDemo)).toBeTruthy();
    });

    it('Component NumberList should exists', () => {
        expect(ReactTestUtils.isCompositeComponent(numberList)).toBeTruthy();
    });  
});