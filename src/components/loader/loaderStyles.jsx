import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    container: {
        "& .loader": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(90,79,67,1) 40%, rgba(237,222,210,1) 100%)',
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            zIndex: 1,
        }
    },
});