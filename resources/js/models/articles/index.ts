import {articleRequest} from "./event";
import {$articles, $articlesIsLoading} from "./store";

export const modelArticles = {
    articleRequest,
    $articles,
    $articlesIsLoading
}