import React, {FC, useEffect} from "react";
import {useStore} from "effector-react";
import {modelSetting} from "../../models/settings";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Phone: FC = () => {
    const phone = useStore(modelSetting.$phone);
    const phoneIsLoading = useStore(modelSetting.$phoneIsLoading);

    useEffect(() => {
        modelSetting.phoneRequest('phone');
    }, []);

    return (
        phoneIsLoading ? <Skeleton width={122} height={22} /> : <a className={`font-medium text-base text-[var(--text-color)]`} href={`tel:${phone.replace(/\D/g, '')}`}>{phone}</a>
    );
}

export default Phone;