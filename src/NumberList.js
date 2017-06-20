import React from 'react';
import PropTypes from 'prop-types';

export default class NumberList extends React.Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <label>{this.props.text}</label>
                    <div>{this.renderSequence(this.props.sequence)}</div>
                </div>
            </div>
        );
    }

    renderSequence(sequence) {
        if(!sequence) return null;

        return (
            <div>{sequence
                .map(
                    (n, index) => <text key={index} className={isNaN(n)? "text-danger": "text-info"}>{n + " "}</text>
                )
            }</div>
        );
    }
}

NumberList.propTypes = {
  sequence: PropTypes.array.isRequired
}


