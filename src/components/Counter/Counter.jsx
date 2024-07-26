import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        good: 0,
        neutral: 0,
        bad: 0
      };

    // Binding the methods to 'this'
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement(evt, type) {
    console.log(`${type} button was clicked!`, evt);
    this.setState((state, props) => ({
      [type]: state[type] + props.step,
    }));
  }

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>{this.state.good}</span>
        <button type="button" onClick={(e) => this.handleIncrement(e, 'good')}>
          Good
        </button>
        <span>{this.state.neutral}</span>
        <button type="button" onClick={(e) => this.handleIncrement(e, 'neutral')}>
          Neutral
        </button>
        <span>{this.state.bad}</span>
        <button type="button" onClick={(e) => this.handleIncrement(e, 'bad')}>
          Bad
        </button>
      </div>
    );
  }
}

// Adding PropTypes validation
Counter.propTypes = {
  step: PropTypes.number.isRequired,
};

export default Counter;