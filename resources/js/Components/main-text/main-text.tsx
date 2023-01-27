import React, {FC, useEffect} from "react";
import {useStore} from "effector-react";
import {modelMainText} from "../../models/main-text";
import {STORAGE_URL} from "../../utils/constans";
// @ts-ignore
import styles from './main-text.module.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {Link} from "@inertiajs/react";

const MainText: FC = () => {
    const mainText = useStore(modelMainText.$mainText);
    const isLoading = useStore(modelMainText.$mainTextIsLoading);

    useEffect(() => {
        modelMainText.mainTextRequest();
    }, []);

    return (
        isLoading ? <div className={`mb-12`}><Skeleton height={`408px`} /></div> :
        <section className={`${styles.mainText} flex justify-between py-24 px-14 mb-16 relative`}>
            <div className={`basis-1/2 max-lg:basis-full`}>
                <h1 className={`text-3xl font-semibold mb-6`}>{mainText?.heading}</h1>
                <div dangerouslySetInnerHTML={{ __html: mainText?.content ? mainText.content : '' }} />
                <Link href={`#`} className={`text-[var(--main-purple)] text-lg font-medium`}>Подробнее</Link>
            </div>
            <img className={`absolute bottom-0 right-0 max-lg:hidden`} src={`${STORAGE_URL}/${mainText?.image}`} alt=""/>
        </section>
    );
}

export default MainText;
