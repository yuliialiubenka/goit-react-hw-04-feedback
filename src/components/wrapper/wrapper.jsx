import PropTypes from 'prop-types';
import { useStyles } from "./wrapperStyles";

export const Wrapper = ({ children, ...PropTypes }) => {
    const classes = useStyles();
    
    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapperItem}>
                <img className={classes.logo} src={PropTypes.logoSrc} alt="Logo" width="100" />
                <h1 className={classes.title}>{PropTypes.title}</h1>
            </div>
            <h2 className={classes.subTitle}>{PropTypes.subTitle}</h2>
            {children}
        </div>
    );
};

Wrapper.propTypes = {
    logoSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
};