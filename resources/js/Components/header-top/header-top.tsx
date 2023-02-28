import {FC} from "react";
import HeaderTopNav from "../header-top-nav/header-top-nav";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import HeaderPhoneBlock from "../header-phone-block/header-phone-block";
import {usePage} from "@inertiajs/react";

const HeaderTop: FC = () => {
    const address: string = usePage().props.address;

    return (
        <section className={`flex my-5 flex-wrap items-center xs:order-1 lg:order-none xs:justify-center gap-y-2`}>
            <div className={`font-normal text-base sm:basis-64`}>{address ? address : <Skeleton/>}</div>
            <HeaderTopNav/>
            <HeaderPhoneBlock/>
        </section>
    );
}

export default HeaderTop;
