import {FC} from 'react';
import Phone from "../phone/phone";

const HeaderPhoneBlock: FC = () => {
    return (
        <div className={`flex gap-x-3 items-center ml-auto`}>
            <Phone/>
            <div className={`text-mainPurple text-bases cursor-pointer`}>Заказать звонок</div>
        </div>
    );
}

export default HeaderPhoneBlock;
