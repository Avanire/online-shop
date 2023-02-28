import React, {FC} from "react";
import {STORAGE_URL} from "../../utils/constans";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {Link, usePage} from "@inertiajs/react";

const Logo: FC = () => {
    const logo: string = usePage().props.logo;

    return (
        <Link href='/' className={`sm:basis-64 flex items-center gap-x-3`}>
            {logo ? <img src={`${STORAGE_URL}${logo}`} alt="CanadaZoo"/> : <Skeleton width={40} height={40}/>}
            <div className={`font-bold text-2xl text-[var(--gray-1)]`}>Canada<span
                className={`text-[var(--main-purple)]`}>Zoo</span></div>
        </Link>
    );
}

export default Logo;
