import {FC} from "react";
import {IArticle} from "../../utils/types";
import {STORAGE_URL} from "../../utils/constans";
import { format } from 'date-fns'
import {Link} from "@inertiajs/react";
import {ru} from "date-fns/locale";

const ArticleCard: FC<IArticle> = ({name, alias, created_at, image}) => {
    return (
        <section className={`flex flex-col max-w-[374px]`}>
            <Link href={`/articles/${alias}`}><img className={`rounded-3xl mb-4`} src={`${STORAGE_URL}${image}`} alt=""/></Link>
            <div className={`text-[var(--link-color)] mb-2`}>{format(Date.parse(created_at), 'dd MMMM yyyy', {locale: ru})}</div>
            <Link href={`/articles/${alias}`} className={`font-semibold text-xl`}>{name}</Link>
        </section>
    );
}

export default ArticleCard;
