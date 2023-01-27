import {createEffect} from "effector";
import {getMenu} from "../../utils/api";

export const fetchMenuFx = createEffect((params: string) => getMenu(params));
export const fetchCategoryFx = createEffect((params: string) => getMenu(params));
export const fetchTopMenuFx = createEffect((params: string) => getMenu(params));