import PropTypes from 'prop-types';
import { useStyles } from "./backgroundStyles";

export const Background = ({ videoSrc, poster }) => {
    const classes = useStyles();

    return (
        <div className={classes.video}>
            <video 
                loop={true} 
                autoPlay={true} 
                src={videoSrc}
                className={classes.video}
                poster={poster}
            ></video>
        </div>
    );
    
};

Background.propTypes = {
    videoSrc: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};