import React, {FC, useEffect} from "react";
import {useStore} from "effector-react";
import {modelSetting} from "../../models/settings";
import {STORAGE_URL} from "../../utils/constans";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {Link} from "@inertiajs/react";

const Logo: FC = () => {
    const logo = useStore(modelSetting.$logo);
    const isLoading = useStore(modelSetting.$logoIsLoading);

    useEffect(() => {
        modelSetting.logoRequest('logo');
    }, [])

    return (
        <Link href='/' className={`basis-64 flex items-center gap-x-3`}>
            <img src={`${STORAGE_URL}/${logo}`} alt="CanadaZoo" />
            <div className={`font-bold text-2xl text-[var(--gray-1)]`}>Canada<span className={`text-[var(--main-purple)]`}>Zoo</span></div>
        </Link>
    );
}

export default Logo;
