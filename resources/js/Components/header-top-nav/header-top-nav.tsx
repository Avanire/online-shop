import {FC} from "react";
import styles from './header-top-nav.module.css';
import 'react-loading-skeleton/dist/skeleton.css';
import {Link, usePage} from "@inertiajs/react";
import Skeleton from "react-loading-skeleton";

const HeaderTopNav: FC = () => {
    const topMenu = usePage().props.topMenu;

    return (
        <nav className={`gap-x-3 xs:hidden md:flex`}>
            {!topMenu ? <div className={`min-w-[360px]`}><Skeleton count={3} inline={true} width={`30%`} className={`mr-1.5`} /></div> : topMenu.map(item => <Link key={item.id} href={item.url}
                                                                                                                                                                  className={`text-base text-linkColor`}>{item.title}</Link>)}
        </nav>

    );
}

export default HeaderTopNav;
