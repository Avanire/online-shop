import React, {FC} from "react";
// @ts-ignore
import styles from "./button.module.css";

interface IButton {
    name: string;
    handleClick?: () => void;
}

const Button:FC<IButton> = ({name, handleClick}) => {
    return (
        <button onClick={handleClick} className={`${styles.cartBtn} py-3 px-7 font-semibold`}>{name}</button>
    );
}

export default Button;
