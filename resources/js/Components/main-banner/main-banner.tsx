import React, {FC} from "react";
import styles from './main-banner.module.css';
import {IBanner} from "../../utils/types";
import {STORAGE_URL} from "../../utils/constans";
import {Link} from "@inertiajs/react";

const MainBanner: FC<IBanner> = ({title, description, link, image}) => {

    return (
        <section className={`${styles.banner} py-20 pl-14 mb-16 items-center justify-between bg-no-repeat hidden sm:flex`}
                 style={image ? {backgroundImage: `url(${STORAGE_URL}/${image})`} : {background: `#F6F7F9`}}
        >
            <div className={`max-w-md`}>
                <div className={`${styles.title} mb-3`}>{title}</div>
                {description ? <div className={`opacity-60`}>{description}</div> : null}
                {link ? <Link href={link} className={`${styles.link} py-3 px-6 inline-block`}>Подробнее</Link> : ''}
            </div>
        </section>
    );
}

export default MainBanner;
