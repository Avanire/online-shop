import {createStore} from "effector";
import {ISlide} from "../../utils/types";

export const $sliders = createStore<Array<ISlide>>([]);
export const $slidersIsLoading = createStore<boolean>(false);