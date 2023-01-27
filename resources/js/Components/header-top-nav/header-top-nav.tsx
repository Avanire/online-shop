import React, {FC, useEffect} from "react";
import {useStore} from "effector-react";
// @ts-ignore
import styles from './header-top-nav.module.css';
import {modelMenu} from "../../models/menu";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {Link} from "@inertiajs/react";

const HeaderTopNav: FC = () => {
    const topMenu = useStore(modelMenu.$topMenu);
    const isLoading = useStore(modelMenu.$topMenuIsLoaded);

    useEffect(() => {
        modelMenu.topMenuRequest('topMenu');
    }, []);

    return (
        <nav className={styles.nav}>
            {isLoading ? <div className={`min-w-[360px]`}><Skeleton count={3} inline={true} width={`30%`} className={`mr-1.5`} /></div> : topMenu.map(item => <Link key={item.id} href={item.url} className={`text-base text-linkColor`}>{item.title}</Link>)}
        </nav>

    );
}

export default HeaderTopNav;
