import React, {FC} from "react";
import InputMask from "react-input-mask";
import {IInput} from "../../utils/types";

export const InputPhone: FC<IInput> = ({value, type= 'phone', onChange, name = 'Номер телефона', required = false}) => {
    return (
        <label htmlFor={type} className={`flex flex-col mb-7 group`}>
            <span className={`text-sm text-textColor mb-3.5 group-hover:text-mainPurple`}>{name}</span>
            <InputMask mask='+7\ 999 999 99 99'
                       value={value}
                       onChange={onChange}
                       className={`p-4 rounded-xl border border-borderColor focus:border-transparent focus:ring-2 focus:ring-mainPurple focus:outline-none`}
                       placeholder='Телефон'
                       name={type}
                       id={type}
                       required={!!required}
            />
        </label>
    );
}

export const InputText: FC<IInput> = ({value, type, onChange, name= 'Имя', required}) => {
    return (
        <label htmlFor={type} className={`flex flex-col group w-full`}>
            <span className={`text-sm text-textColor mb-3.5 group-hover:text-mainPurple`}>{name}</span>
            <input type="text"
                   name={type}
                   id={type}
                   placeholder={name}
                   className={`p-4 rounded-xl border border-borderColor focus:border-transparent
                                focus:ring-2 focus:ring-mainPurple focus:outline-none`}
                   value={value}
                   onChange={onChange}
                   required={!!required}
            />
        </label>
    );
}

export const InputEmail: FC<IInput> = ({value, type = 'mail', onChange, name= 'Электронная почта', required}) => {
    return (
        <label htmlFor={type} className={`flex flex-col group`}>
            <span className={`text-sm text-textColor mb-3.5 group-hover:text-mainPurple`}>{name}</span>
            <input type="email"
                   name={type}
                   id={type}
                   placeholder='sample@emailcom'
                   className={`p-4 rounded-xl border border-borderColor focus:border-transparent focus:ring-2 focus:ring-mainPurple focus:outline-none`}
                   value={value}
                   onChange={onChange}
                   required={!!required}
            />
        </label>
    );
}
