import {FC, useCallback} from 'react';
import Phone from "../phone/phone";
import {modelModal} from "../../models/modal";

const HeaderPhoneBlock: FC = () => {
    const handleOpenCallback = useCallback(() => {
        modelModal.toggleModal(true);
    }, []);

    return (
        <div className={`flex gap-x-3 items-center sm:ml-auto`}>
            <Phone/>
            <button className={`text-mainPurple text-bases cursor-pointer`} onClick={handleOpenCallback}>Заказать звонок</button>
        </div>
    );
}

export default HeaderPhoneBlock;
