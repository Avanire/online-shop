import {FC} from "react";
import SiteLayout from "../../Layouts/SiteLayout";
import {IArticlePage} from "../../utils/types";
import Article from "../../Components/article/article";

const ArticlePage: FC<IArticlePage> = ({article, metaDescription, metaTitle, additional}) => {

    return (
        <SiteLayout title={metaTitle ? metaTitle : article.name}
                    description={metaDescription ? metaDescription : `Статья: ${article.name}`}>
            <Article article={article} additional={additional}/>
        </SiteLayout>
    );
}

export default ArticlePage;
