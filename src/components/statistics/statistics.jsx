import PropTypes from 'prop-types';
import { useStyles } from "./statisticsStyles";

export const Statistics = ({ ...props }) => {
    const classes = useStyles();
    
    return (
        <div className={classes.container}>
            <h3 className={classes.title}>{props.title}</h3>
            <ul className={classes.list}>
                <li className={classes.listItem}>Positive Feedback: <span>{props.positivePercentage}%</span></li>
                <li className={classes.listItem}>Total: <span>{props.total}</span></li>
                <li className={classes.listItem}>Good: <span>{props.good}</span></li>
                <li className={classes.listItem}>Neutral: <span>{props.neutral}</span></li>
                <li className={classes.listItem}>Bad: <span>{props.bad}</span></li>
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