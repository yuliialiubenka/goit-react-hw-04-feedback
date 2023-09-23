import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    container: {
        display: "flex",
        gap: 20,
        justifyContent: "center",
        flexWrap: "wrap",
    },
    button: {
        border: "10px solid #5a4f43",
        fontFamily: "'Dancing Script', cursive",
        fontSize: 30,
        fontWeight: 700,
        color: "#fff",
        width: 120,
        height: 100,
        borderRadius: "100%",
        cursor: "pointer",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cg xmlns='http://www.w3.org/2000/svg' transform='matrix(0 1 -1 0 256 -0)'%3E%3Cellipse cx='128' cy='128' fill='%23a18a6d' rx='98.83' ry='112.3'%3E%3C/ellipse%3E%3Cpath fill='%236d5c49' d='M226.83,128c0-59.17-40.28-107.66-91.38-112C164.1,45.09,160.81,95.13,128,128s-36.1,82.91-7.45,112q3.69.31,7.45.31C182.58,240.3,226.83,190,226.83,128Z'%3E%3C/path%3E%3Cpath fill='%235a4f43' d='M128,249.29C68.55,249.29,20.19,194.88,20.19,128S68.55,6.71,128,6.71,235.81,61.12,235.81,128,187.45,249.29,128,249.29Zm0-224.61C78.46,24.68,38.16,71,38.16,128S78.46,231.32,128,231.32,217.84,185,217.84,128,177.54,24.68,128,24.68Z'%3E%3C/path%3E%3Cpath fill='%235a4f43' d='M102.29,213.51a9,9,0,0,1-8.83-7.35c-5.49-29.74,5.05-61.33,28.18-84.51,18.68-18.71,27.58-45,23.23-68.55a9,9,0,0,1,17.67-3.26c5.49,29.74-5,61.33-28.18,84.51-18.68,18.71-27.58,45-23.23,68.55a9,9,0,0,1-7.2,10.46A9.18,9.18,0,0,1,102.29,213.51Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "150%",
        backgroundPosition: "center",
        backgroundColor: "transparent",
        boxShadow: "rgba(90, 79, 67, 0.68) 0px 6px 8px 4px;",

        "&:hover": {
            transform: "scale(1.1)",
            "@media (max-width: 600px)": {
                transform: "none",
            }
        }
    }
});