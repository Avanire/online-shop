import {FC} from "react";
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from "react-loading-skeleton";
import {usePage} from "@inertiajs/react";

const Phone: FC = () => {
    const phone = usePage().props.phone;

    return (
        !phone ? <Skeleton width={122} height={22}/> : <a href={`tel:${phone.replace(/\D/g, '')}`}>{phone}</a>
    );
}

export default Phone;
