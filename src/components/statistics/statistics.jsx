import PropTypes from 'prop-types';
import { useStyles } from "./statisticsStyles";

export const Statistics = ({ ...PropTypes }) => {
    const classes = useStyles();
    
    return (
        <div className={classes.container}>
            <h3 className={classes.title}>{PropTypes.title}</h3>
            <ul className={classes.list}>
                <li className={classes.listItem}>Positive Feedback: <span>{PropTypes.positivePercentage}%</span></li>
                <li className={classes.listItem}>Total: <span>{PropTypes.total}</span></li>
                <li className={classes.listItem}>Good: <span>{PropTypes.good}</span></li>
                <li className={classes.listItem}>Neutral: <span>{PropTypes.neutral}</span></li>
                <li className={classes.listItem}>Bad: <span>{PropTypes.bad}</span></li>
            </ul>
        </div>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};