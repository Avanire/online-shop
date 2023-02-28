import {FC} from "react";
import {useStore} from "effector-react";
import {modelArticles} from "../../models/articles";
import ArticleCard from "../article-card/article-card";

const MainArticles: FC = () => {
    const articles = useStore(modelArticles.$articles);

    return (
        <section className={`mb-20`}>
            <h3 className={`mb-8`}>Полезное</h3>
            <div className={`flex overflow-hidden gap-6`}>
                {articles.map(item => <ArticleCard key={item.id} {...item} />)}
            </div>
        </section>
    );
}

export default MainArticles;
