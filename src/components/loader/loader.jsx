import React, { useEffect, useState } from "react";
import { Circles } from 'react-loader-spinner'
import { useStyles } from "./loaderStyles";

function Loader() {
    const classes = useStyles();
    const [done, setDone] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            const onPageLoad = () => {
                setDone(true);
            };
            // Check if the page has already loaded
            if (document.readyState === 'complete') {
            onPageLoad();
            } else {
            window.addEventListener('load', onPageLoad);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener('load', onPageLoad);
            }
        }, 1500);
    }, []);
 
    return (
        <>
            {!done ? (
                <div className={classes.container}>
                    <Circles
                        height="180"
                        width="180"
                        color="#edded2b3"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass="loader"
                        visible={true}
                    />
                </div>
            ) : (
                <Circles
                    visible={false}
                />
            )}
        </>
    );
}

export default Loader;