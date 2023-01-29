import {slidersRequest} from "./event";
import {$sliders, $slidersIsLoading} from "./store";
import {fetchSlidersFx} from "./fx";

$sliders.on(slidersRequest, (_, result) => result);
$slidersIsLoading.on(fetchSlidersFx.pending, (_, isLoading) => isLoading);
