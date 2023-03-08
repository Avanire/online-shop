import {$searchProducts, $searchRequestFailed, $searchRequestLoading} from "./store";
import {setDefaultSearchStore} from "./event";
import {sendSearchQueryFx} from "./fx";

$searchProducts
    .on(sendSearchQueryFx.doneData, (_, result) => result)
    .reset(setDefaultSearchStore);

$searchRequestLoading.on(sendSearchQueryFx.pending, (_, loading) => loading);

$searchRequestFailed.on(sendSearchQueryFx.fail, (isFail, _) => isFail);
