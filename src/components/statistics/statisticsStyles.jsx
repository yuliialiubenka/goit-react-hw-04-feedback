import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    container: {
    },
    title: {
        textAlign: "center",
        marginBottom: 20,
        marginTop: 20
    },
    list: {
        display: "flex",
        flexWrap: "wrap",
        gap: 20,
        justifyContent: "center",
        "@media (max-width: 600px)": {
            gap: 10,
        }
    },
    listItem: {
        textAlign: "center",
        "&:nth-child(1)": {
            width: "100%"
        },
        "& span": {
            fontWeight: 700
        }
    }
});