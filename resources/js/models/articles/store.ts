import {createStore} from "effector";
import {IArticle} from "../../utils/types";

export const $articles = createStore<Array<IArticle>>([]);
export const $articlesIsLoading = createStore<boolean>(false);