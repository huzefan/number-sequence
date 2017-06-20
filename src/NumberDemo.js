import React, { Component } from 'react';

import NumberList from './NumberList';

export default class NumberDemo extends Component {

    constructor(props) {
        super(props);
            this.state = {
            input: null,
            textValue: null
        };

        this.initialState = this.state;
    }

    isDivisibleBy = (number, divisor) => number%divisor===0;
    isEven = (number) => this.isDivisibleBy(number, 2);
    isOdd = (number) => !this.isEven(number);
    isDivisibleBy3 = (number) => this.isDivisibleBy(number, 3);
    isDivisibleBy5 = (number) => this.isDivisibleBy(number, 5);
    isDivisibleBy3And5 = (number) => this.isDivisibleBy3(number) && this.isDivisibleBy5(number);

    format = (number) => {
        if(this.isDivisibleBy3And5(number)) {
            return "Z";
        } else if(this.isDivisibleBy3(number)) {
            return "C";
        } else if(this.isDivisibleBy5(number)) {
            return "E";
        } else {
            return number;
        }
    }

    fibonacci = (num) => {
        if(num<=1 || !num) return [];

        const fib = [0, 1];
        for(let i=2; i<num; i++)
        {
            fib[i] = fib[i-2] + fib[i-1];
        }

        return fib;
    }

    handleChange = e => this.setState({ textValue: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ input: this.state.textValue });
    };

    onClear = (e) => {
        this.refs.numberInput.value = '';
        this.setState(this.initialState);
    };

    getNumbers = () => Array.from({length: parseInt(this.state.input, 10)}, (v, k) => k+1);

    isValid() {
        const data = this.state.textValue;
        const num = parseFloat(data, 10);

        if(data === null || data === '') { // check null or empty
            return true;
        }

        if(num%1 === 0 && num>0) { // check positive integer
            return true;
        }

        return false;
    }

    renderForm = (valid) => {
        return (
            <form onSubmit={this.onSubmit}>
                <div className={!valid? "form-group has-error": "form-group"}>
                    <label>Enter number:</label>
                    <input type="number" ref="numberInput" placeholder = "Enter a Number" required className="form-control" min="1" max="1000" step="1" onChange={ this.handleChange }/>
                    {!valid?
                        <span className="label label-danger">Invalid input. Please enter valid integer greater than 0</span>: 
                        <span className="label label-info">Please specify integer value greater than 0</span>
                    }                
                </div>
                <div className="btn-toolbar">
                    <input type="submit" className="btn btn-primary" value="Submit"/>      
                    <input type="button" className="btn btn-info" value="Clear" onClick={this.onClear}/>   
                </div>   
            </form>
        );
    }

    renderSequenceList = (num, numbers) => {
        return (
            <div>
                <NumberList text="All" sequence={numbers}></NumberList>
                <NumberList text="Even" sequence={numbers.filter(this.isEven)}></NumberList>
                <NumberList text="Odd" sequence={numbers.filter(this.isOdd)}></NumberList>
                <NumberList text="Formatted multiples of 3 and 5" sequence={numbers.map(this.format)}></NumberList>
                <NumberList text="Fibonacci" sequence={this.fibonacci(num)}></NumberList>
            </div>
        );
    }
  

    render() {
        const valid = this.isValid();
        const num = parseInt(this.state.input, 10);
        const numbers = this.getNumbers();

        return (
            <div className="container">
                <h2>Numeric Sequence Calculator</h2>
                <hr/>
                    {this.renderForm(valid)}
                <hr/>
                {this.renderSequenceList(num, numbers)}
            </div>
        );
    }

}
