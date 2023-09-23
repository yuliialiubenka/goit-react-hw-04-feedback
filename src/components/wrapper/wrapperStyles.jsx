import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    wrapper: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "20px 40px 40px 40px",
        width: 540,
        display: "flex",
        flexDirection: "column",
        gap: 24,
        boxShadow: "rgba(0, 0, 0, 0.32) 0px 4px 21px 4px",
        borderRadius: 30,
        background: "#fff",
        "@media (max-width: 600px)": {
            width: 'fit-content',
            minWidth: 310,
            padding: "20px 20px 40px 20px",
        }
    },
    wrapperItem: {
        display: "flex",
        alignItems: "center",
        gap: 20,
        margin: "0 auto 20px auto",

        "& img": {
            "@media (max-width: 600px)": {
                width: 80
            }
        }
    },
    title: {
        fontFamily: "'Dancing Script', cursive",
        fontSize: 60,
        fontWeight: 700,
        "@media (max-width: 600px)": {
            fontSize: 48,
        }
    },
    subTitle: {
        fontSize: 28,
        textAlign: "center",
        "@media (max-width: 600px)": {
            fontSize: 20,
        }
    }
});