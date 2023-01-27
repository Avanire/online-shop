import {slidersRequest} from "./event";
import {$sliders, $slidersIsLoading} from "./store";
import {fetchSlidersFx} from "./fx";
import {forward} from "effector";

$sliders.on(fetchSlidersFx.doneData, (_, result) => result.data);
$slidersIsLoading.on(fetchSlidersFx.pending, (_, isLoading) => isLoading);

forward({
   from: slidersRequest,
   to: fetchSlidersFx
});