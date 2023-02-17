import React, {FC} from "react";
import InputMask from "react-input-mask";
import {IInput} from "../../utils/types";

export const InputPhone: FC<IInput> = ({value, onChange}) => {
    return (
        <label htmlFor="phone" className={`flex flex-col mb-7`}>
            <span className={`text-sm text-textColor mb-3.5`}>Номер телефона</span>
            <InputMask mask='+7\ 999 999 99 99'
                       value={value}
                       onChange={onChange}
                       className={`p-4 rounded-xl border border-borderColor focus:border-mainPurple`}
                       placeholder='Телефон'
                       name='phone'
                       id='phone'
            />
        </label>
    );
}

export const InputText: FC<IInput> = ({value, onChange}) => {
    return (
        <label htmlFor="name" className={`flex flex-col`}>
            <span className={`text-sm text-textColor mb-3.5`}>Имя</span>
            <input type="text"
                   name='name'
                   id='name'
                   placeholder='Имя'
                   className={`p-4 rounded-xl border border-borderColor focus:border-mainPurple`}
                   value={value}
                   onChange={onChange}
            />
        </label>
    );
}
