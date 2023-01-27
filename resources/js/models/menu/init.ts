import {categoryRequest, menuRequest, topMenuRequest} from "./event";
import {$categories, $categoriesIsLoaded, $menu, $menuIsLoaded, $topMenu, $topMenuIsLoaded} from "./store";
import {fetchCategoryFx, fetchMenuFx, fetchTopMenuFx} from "./fx";
import {forward} from "effector";

$menu
    .on(fetchMenuFx.doneData, (_, result) => result.data);

$menuIsLoaded
    .on(fetchMenuFx.pending, (_, isPending) => isPending);

$categories
    .on(fetchCategoryFx.doneData, (_, result) => result.data);

$categoriesIsLoaded
    .on(fetchCategoryFx.pending, (_, isPending) => isPending);

$topMenu
    .on(fetchTopMenuFx.doneData, (_, result) => result.data);

$topMenuIsLoaded
    .on(fetchTopMenuFx.pending, (_, isPending) => isPending);

forward({
    from: menuRequest,
    to: fetchMenuFx
});

forward({
    from: categoryRequest,
    to: fetchCategoryFx
});

forward({
    from: topMenuRequest,
    to: fetchTopMenuFx
});