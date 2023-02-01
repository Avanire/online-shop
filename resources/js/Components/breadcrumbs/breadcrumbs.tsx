import {FC} from "react";
import {Link, usePage} from "@inertiajs/react";
import uuid from 'react-uuid';
//@ts-ignore
import sep from '../../../images/separate.svg';


const Breadcrumbs: FC = () => {
    const breadcrumbs = usePage().props.breadcrumbs;
    return (
        <section className={`container mx-auto pt-6 pb-8 flex items-center gap-x-2`}>
            {breadcrumbs.map((item, index) => index === breadcrumbs.length - 1 ? null : <><Link key={uuid()} className={`text-sm text-linkColor`}
                                                                                               href={item.url}>{item.title}</Link>{index === breadcrumbs.length - 2 ? null : <img
                src={sep} alt=""/>}</>)}
        </section>
    );
}

export default Breadcrumbs;
