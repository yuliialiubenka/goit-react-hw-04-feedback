import PropTypes from 'prop-types';
import { useStyles } from "./feedbackOptionsStyles";

export const FeedbackOptions = ({ options, onProvideFeedback }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        {options.map(option => (
          <button
            key={option}
            type="button"
            onClick={() => onProvideFeedback(option)}
            className={classes.button}
          >
            {option}
          </button>
        ))}
    </div>

    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onProvideFeedback: PropTypes.func.isRequired,
};
