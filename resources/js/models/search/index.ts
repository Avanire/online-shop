import {$searchRequestLoading, $searchRequestFailed, $searchProducts} from "./store";
import {requestSearchQuery, setDefaultSearchStore} from "./event";

export const modelSearch = {
    requestSearchQuery,
    setDefaultSearchStore,
    $searchProducts,
    $searchRequestLoading,
    $searchRequestFailed
};
