import {createEffect} from "effector";
import {getSliders} from "../../utils/api";

export const fetchSlidersFx = createEffect(getSliders);
