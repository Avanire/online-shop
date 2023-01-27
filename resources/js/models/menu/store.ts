import {createStore} from "effector";
import {IMenu} from "../../utils/types";

export const $menu = createStore<Array<IMenu>>([]);
export const $menuIsLoaded = createStore<boolean>(false);

export const $categories = createStore<Array<IMenu>>([]);
export const $categoriesIsLoaded = createStore<boolean>(false);

export const $topMenu = createStore<Array<IMenu>>([]);
export const $topMenuIsLoaded = createStore<boolean>(false);