import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';



export default function App() {

  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })
  const { good, neutral, bad } = state;
  const total = good + neutral + bad;
  const positivePercentage = calculatePositivePercentage();


  function handleIncrement (type) {
    setState((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  function calculatePositivePercentage() {
    return total ? Math.round((good / total) * 100) : 0;
  }

  return (
    <div className="app-container">
      <Section title="Please leave a feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback." />
        )}
      </Section>
    </div>
  );
}

App.propTypes = {
  step: PropTypes.number,
};
