import {createEffect} from "effector/compat";
import {getArticles} from "../../utils/api";

export const fetchArticlesFx = createEffect(getArticles);
