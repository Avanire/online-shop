import {FC} from "react";
import {IArticles} from "../../utils/types";
import ArticleCard from "../article-card/article-card";
import MainSubscription from "../main-subscription/main-subscription";

const Articles: FC<IArticles> = ({articles}) => {
    return (
        <section className={`container mx-auto`}>
            <h1 className={`text-headerColor text-3xl mb-8`}>Полезное</h1>
            <div className={`grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-10 mb-28`}>
                {articles && articles.map(item => <ArticleCard key={item.id} {...item} />)}
            </div>
            <MainSubscription />
        </section>
    );
}

export default Articles;
