import React from 'react';
import './Square.css';

export class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    render() {
        const currentValue = this.state.value === 'X' ? 'O' : 'X';
        return (
            <button className='square' onClick={() => {
                this.setState({ value: currentValue })
            }}>
                {this.state.value}
            </button>
        );
    }
}