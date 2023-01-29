import {createEffect} from "effector/compat";
import {getArticles} from "../../Utils/api";

export const fetchArticlesFx = createEffect(getArticles);
