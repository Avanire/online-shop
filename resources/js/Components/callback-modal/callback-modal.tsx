import React, {FC, FormEvent, useCallback, useState} from "react";
import catImage from '../../../images/callbackCat.webp';
// @ts-ignore
import InputMask from 'react-input-mask';
import axios from "axios";

const CallbackModal: FC = () => {
    const [inputName, setInputName] = useState('');
    const [inputTel, setInputTel] = useState('');

    const handleChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputName(e.target.value);
    }, []);

    const handleChangeTel = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputTel(value);
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        axios.post('/', {
            'name': inputName,
            'phone': inputTel
        }).then(res => console.log(res));
    }

    return (
        <section className={`p-10`}>
            <img className={`mx-auto mb-8`} src={catImage} alt=""/>
            <h2 className={`font-medium text-2xl text-center mb-6`}>Заказать звонок</h2>
            <form action="/" method="POST" className={`flex flex-col gap-y-6 mb-6`} onSubmit={handleSubmit}>
                <label htmlFor="name" className={`flex flex-col`}>
                    <span className={`text-sm text-textColor mb-3.5`}>Имя</span>
                    <input type="text"
                           name='name'
                           id='name'
                           placeholder='Имя'
                           className={`p-4 rounded-xl border border-borderColor focus:border-mainPurple`}
                           value={inputName}
                           onChange={handleChangeName}
                    />
                </label>
                <label htmlFor="phone" className={`flex flex-col mb-7`}>
                    <span className={`text-sm text-textColor mb-3.5`}>Номер телефона</span>
                    <InputMask mask='+7\ 999 999 99 99'
                               value={inputTel}
                               onChange={handleChangeTel}
                               className={`p-4 rounded-xl border border-borderColor focus:border-mainPurple`}
                               placeholder='Телефон'
                               name='phone'
                               id='phone'
                    />
                </label>
                <button className={`rounded-xl bg-mainPurple text-white py-4`}>Заказать</button>
            </form>
            <p className={`text-sm`}>Нажимая кнопку, вы соглашаетесь с Политикой конфиденциальности и Условиями
                использования</p>
        </section>
    );
}

export default CallbackModal;
