import {articleRequest} from "./event";
import {fetchArticlesFx} from "./fx";
import {$articles, $articlesIsLoading} from "./store";
import {forward} from "effector";

$articles.on(fetchArticlesFx.doneData, (_, result) => result.data);

$articlesIsLoading.on(fetchArticlesFx.pending, (_, isLoading) => isLoading);

forward({
    from: articleRequest,
    to: fetchArticlesFx
});