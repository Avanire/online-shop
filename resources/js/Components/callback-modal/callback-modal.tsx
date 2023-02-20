import React, {FC, FormEvent, useCallback, useState} from "react";
import catImage from '../../../images/callbackCat.webp';
// @ts-ignore
import InputMask from 'react-input-mask';
import mailIcon from '../../../images/modal-success.webp';
import mailSend from '../../../images/177-envelope-mail-send-lineal.gif';
import {useStore} from "effector-react";
import {modelModal} from "../../models/modal";
import {InputPhone, InputText} from "../modal-input/modal-input";
import Button from "../button/button";

const CallbackModal: FC = () => {
    const [inputName, setInputName] = useState('');
    const [inputTel, setInputTel] = useState('');
    const modalSend = useStore(modelModal.$modalCallbackFormSuccess);
    const modalSending = useStore(modelModal.$modalCallbackFormLoading);
    const modalSendFailed = useStore(modelModal.$modalCallbackFormFailed);

    const handleChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputName(e.target.value);
    }, []);

    const handleChangeTel = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputTel(value);
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const payload = {
            'name': inputName,
            'phone': inputTel
        };
        modelModal.sendCallbackRequest(payload);
    }

    if (modalSending) {
        return (<div className={`text-center`}>
            <img src={mailSend} alt="" className={`mx-auto`}/>
            Отправляем...
        </div>);
    }

    if (modalSendFailed) {
        return (<div>Произошла ошибка. Попробуйте позже или свяжитесь с нами по телефону.</div>);
    }

    return (
        <section className={`p-10`}>
            {!modalSend ?
                <>
                    <img className={`mx-auto mb-8`} src={catImage} alt=""/>
                    <h2 className={`font-medium text-2xl text-center mb-6`}>Заказать звонок</h2>
                    <form action="/" method="POST" className={`flex flex-col gap-y-6 mb-6`} onSubmit={handleSubmit}>
                        <InputText value={inputName} onChange={handleChangeName} required={true} />
                        <InputPhone value={inputTel} onChange={handleChangeTel} required={true} />
                        <Button name='Заказать' />
                    </form>
                    <p className={`text-sm`}>Нажимая кнопку, вы соглашаетесь с Политикой конфиденциальности и Условиями
                        использования</p>
                </>
                :
                <div className={`text-center`}>
                    <img src={mailIcon} alt="" className={`mx-auto`}/>
                    Спасибо! Скоро мы свяжемся с вами.
                </div>
            }
        </section>
    );
}

export default CallbackModal;
