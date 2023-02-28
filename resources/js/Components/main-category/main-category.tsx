import React, {FC} from "react";
import {IMainCategory} from "../../utils/types";
import styles from './main-category.module.css'
import {STORAGE_URL} from "../../utils/constans";
import {Link} from "@inertiajs/react";

const MainCategory: FC<IMainCategory> = ({name, link, children, image}) => {
    return (
        <section className={`${styles.category} flex-auto relative flex items-center py-2 sm:py-0`}>
            <div className={`pr-6 sm:pr-12 relative xs:-bottom-3.5 sm:bottom-0`}><img src={`${STORAGE_URL}${image}`} alt=''/></div>
            <div className={``}>
                <h3 className={`font-medium text-3xl pb-6`}><Link href={`catalog/${link}`}>{name}</Link></h3>
                <div className={`flex gap-5 flex-wrap max-w-[219px]`}>
                    {children.map(item => <Link className={``} key={item.id} href={`catalog/${item.url}`}>{item.title}</Link>)}
                </div>
            </div>
        </section>
    );
}

export default MainCategory;
