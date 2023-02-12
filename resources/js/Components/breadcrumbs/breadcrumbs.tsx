import {FC} from "react";
import {Link, usePage} from "@inertiajs/react";
import uuid from 'react-uuid';
import sep from '../../../images/separate.svg';


const Breadcrumbs: FC = () => {
    const breadcrumbs = usePage().props.breadcrumbs;
    return (
        <section className={`container mx-auto pt-6 pb-8 flex items-center gap-x-2`}>
            {breadcrumbs.map((item, index) => index === breadcrumbs.length - 1 ? null :
                    <Link key={uuid()}
                        className={`text-sm text-linkColor flex gap-x-2 hover:text-mainPurple`}
                        href={item.url}
                    >
                        {item.title}
                        {index === breadcrumbs.length - 2 ? null : <img src={sep} alt=""/>}
                    </Link>

                )}
        </section>
    );
}

export default Breadcrumbs;
