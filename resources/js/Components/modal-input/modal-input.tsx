import React, {FC} from "react";
import InputMask from "react-input-mask";
import {IInput} from "../../utils/types";

export const InputPhone: FC<IInput> = ({value, onChange, name = 'Номер телефона', required = false}) => {
    return (
        <label htmlFor="phone" className={`flex flex-col mb-7 group`}>
            <span className={`text-sm text-textColor mb-3.5 group-hover:text-mainPurple`}>{name}</span>
            <InputMask mask='+7\ 999 999 99 99'
                       value={value}
                       onChange={onChange}
                       className={`p-4 rounded-xl border border-borderColor focus:border-transparent focus:ring-2 focus:ring-mainPurple focus:outline-none`}
                       placeholder='Телефон'
                       name='phone'
                       id='phone'
                       required={!!required}
            />
        </label>
    );
}

export const InputText: FC<IInput> = ({value, onChange, name= 'Имя', required}) => {
    return (
        <label htmlFor="name" className={`flex flex-col group`}>
            <span className={`text-sm text-textColor mb-3.5 group-hover:text-mainPurple`}>{name}</span>
            <input type="text"
                   name='name'
                   id='name'
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

export const InputEmail: FC<IInput> = ({value, onChange, name= 'Электронная почта', required}) => {
    return (
        <label htmlFor="mail" className={`flex flex-col group`}>
            <span className={`text-sm text-textColor mb-3.5 group-hover:text-mainPurple`}>{name}</span>
            <input type="email"
                   name='mail'
                   id='mail'
                   placeholder='sample@emailcom'
                   className={`p-4 rounded-xl border border-borderColor focus:border-transparent focus:ring-2 focus:ring-mainPurple focus:outline-none`}
                   value={value}
                   onChange={onChange}
                   required={!!required}
            />
        </label>
    );
}
