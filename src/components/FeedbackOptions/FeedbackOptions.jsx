import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.wrapButton}>
      {options.map(option => (
        <button
          className={css.button}
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
