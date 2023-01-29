import {FC} from "react";
import {STORAGE_URL} from "../../utils/constans";
// @ts-ignore
import styles from './main-text.module.css';
import {Link} from "@inertiajs/react";
import {IMainText} from "../../utils/types";

const MainText: FC<IMainText> = ({heading, content, image}) => {

    return (
        <section className={`${styles.mainText} flex justify-between py-24 px-14 mb-16 relative`}>
            <div className={`basis-1/2 max-lg:basis-full`}>
                <h1 className={`text-3xl font-semibold mb-6`}>{heading}</h1>
                <div dangerouslySetInnerHTML={{__html: content ? content : ''}}/>
                <Link href={`#`} className={`text-[var(--main-purple)] text-lg font-medium`}>Подробнее</Link>
            </div>
            <img className={`absolute bottom-0 right-0 max-lg:hidden`} src={`${STORAGE_URL}${image}`} alt=""/>
        </section>
    );
}

export default MainText;
