import PropTypes from 'prop-types';
import { useStyles } from "./notificationStyles";

export const Notification = ({ message }) => {
    const classes = useStyles();

    return (
        <div className={classes.message}>{message}</div>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};
