import {FC} from "react";
import {IArticle} from "../../utils/types";
import {STORAGE_URL} from "../../utils/constans";
import {Link} from "@inertiajs/react";



const ArticleCard: FC<IArticle> = ({name, alias, created_at, image}) => {
    return (
        <section className={`flex flex-col max-w-[374px] basis-[359px] flex-shrink-0`}>
            <Link href={`/articles/${alias}`}><img className={`rounded-3xl mb-4`} src={`${STORAGE_URL}${image}`} alt=""/></Link>
            <div className={`text-[var(--link-color)] mb-2`}>{new Intl.DateTimeFormat('ru-RU').format(Date.parse(created_at))}</div>
            <Link href={`/articles/${alias}`} className={`font-semibold text-xl`}>{name}</Link>
        </section>
    );
}

export default ArticleCard;
