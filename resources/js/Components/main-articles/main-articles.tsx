import React, {FC, useEffect} from "react";
import {useStore} from "effector-react";
import {modelArticles} from "../../models/articles";
import ArticleCard from "../article-card/article-card";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MainArticles: FC = () => {
    const articles = useStore(modelArticles.$articles);
    const isLoading = useStore(modelArticles.$articlesIsLoading);

    useEffect(() => {
        modelArticles.articleRequest();
    }, []);

    return (
        <section className={`mb-20`}>
            <h3 className={`mb-8`}>Полезное</h3>
            <div className={`flex gap-6`}>
                {isLoading ? <div className={`w-full`}><Skeleton count={4} inline={true} width={`23%`} height={`364px`} className={`mr-4`} /></div> : articles.map(item => <ArticleCard key={item.id} {...item} />)}
            </div>
        </section>
    );
}

export default MainArticles;