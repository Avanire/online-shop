import React, {FC, useState} from "react";
import {useStore} from "effector-react";
import {modelSubscribe} from "../../models/subscription";

const MainSubscription: FC = () => {
    const sub = useStore(modelSubscribe.$subscribeSuccess);
    const [email, setEmail] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        modelSubscribe.subscribeRequest(email);
    }

    return (
        <section className={`p-10 rounded-3xl bg-[var(--main-purple)] flex justify-between items-center mb-12 flex-wrap sm:flex-nowrap`}>
            <div className={`basis-1/2`}>
                <div className={`text-white font-bold text-2xl mb-3`}>Хочу быть в курсе акций и новинок</div>
                <div className={`text-white text-sm`}>Подписывайтесь и получайте самые интересные предложения первыми
                </div>
            </div>
            {sub !== 'email success added' ? (
                    <form action="" method='POST' className={`basis-1/2`} onSubmit={handleSubmit}>
                        <div className={`flex gap-2.5 mb-3`}>
                            <input type="email"
                                   placeholder='Введите e-mail'
                                   className={`py-3.5 px-5 rounded-xl min-w-[360px]`}
                                   onChange={e => setEmail(e.target.value)}
                            />
                            <button className={`rounded-xl py-3.5 px-6 bg-white`}>Подписаться</button>
                        </div>
                        <div className={`text-white text-xs`}>Нажимая «Подписаться», вы соглашаетесь с политикой
                            конфиденциальности
                        </div>
                    </form>) :
                <div className={`text-white font-bold text-xl basis-1/2`}>Спасибо! Подписка на новости оформлена, будем
                    держать вас в курсе новостей.</div>}

        </section>
    );
}

export default MainSubscription;
