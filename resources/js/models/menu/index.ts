import {categoryRequest, menuRequest, topMenuRequest} from "./event";
import {$categories, $categoriesIsLoaded, $menu, $menuIsLoaded, $topMenu, $topMenuIsLoaded} from "./store";

export const modelMenu = {
    menuRequest,
    $menu,
    $menuIsLoaded,
    categoryRequest,
    $categories,
    $categoriesIsLoaded,
    topMenuRequest,
    $topMenu,
    $topMenuIsLoaded
}