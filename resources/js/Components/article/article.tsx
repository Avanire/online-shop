import {FC} from "react";
import {IArticleComponent} from "../../utils/types";
import styles from './article.module.css';
import MainSubscription from "../main-subscription/main-subscription";
import ArticleCard from "../article-card/article-card";


const Article: FC<IArticleComponent> = ({article, additional}) => {

    return (
        <section className={`container mx-auto`}>
            <h1 className={`text-3xl font-semibold mb-5`}>{article.name}</h1>
            <div
                className={`mb-8 text-productLightGray`}>{new Intl.DateTimeFormat('ru-RU').format(Date.parse(article.created_at))}</div>
            <div className={`grid grid-cols-3 gap-x-14`}>
                {article.text && <div className={`${styles.description} mb-14 col-span-2`}
                                      dangerouslySetInnerHTML={{__html: article.text}}/>}
                <div>
                    <h5 className={`mb-6 text-2xl`}>Читайте также</h5>
                    <div className={`flex flex-col`}>
                        {additional.map(item => <ArticleCard key={item.id} {...item} />)}
                    </div>
                </div>
            </div>
            <MainSubscription/>
        </section>
    );
}

export default Article;
