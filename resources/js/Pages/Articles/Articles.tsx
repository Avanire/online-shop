import {FC} from "react";
import SiteLayout from "../../Layouts/SiteLayout";
import Articles from "../../Components/articles/articles";
import {IArticles} from "../../utils/types";

const ArticlesPage: FC<IArticles> = ({articles}) => {

    return (
        <SiteLayout title='Статьи' description='Полезные статьи'>
            <Articles articles={articles} />
        </SiteLayout>
    );
}

export default ArticlesPage;
