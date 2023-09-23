import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    video: {
        position: "absolute",
        zIndex: "-1",
        height: "100%",
        width: "100%",
        objectFit: "cover",
        top: 0,
        left: 0
    }
});