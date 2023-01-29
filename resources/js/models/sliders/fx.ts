import {createEffect} from "effector";
import {getSliders} from "../../Utils/api";

export const fetchSlidersFx = createEffect(getSliders);
