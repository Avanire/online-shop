import React, {FC} from "react";

interface IButton {
    name: string;
    handleClick?: () => void;
    disabled?: boolean;
}

const Button:FC<IButton> = ({name, handleClick, disabled= false}) => {
    return (
        <button onClick={handleClick} className={`rounded-xl bg-mainPurple text-white py-4 w-full ${disabled ? 'bg-[#D1D5DB]' : ''}`} disabled={disabled}>{name}</button>
    );
}

export default Button;
