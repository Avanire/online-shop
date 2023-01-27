import {brandsRequest} from "./event";
import {$brands, $brandIsLoading} from "./store";
import {fetchBrandsFx} from "./fx";
import {forward} from "effector";

$brands
    .on(fetchBrandsFx.doneData, (_, result) => result.data);

$brandIsLoading
    .on(fetchBrandsFx.pending, (_, isLoaded) => isLoaded);

forward({
    from: brandsRequest,
    to: fetchBrandsFx
});