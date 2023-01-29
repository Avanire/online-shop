import {createStore} from "effector";
import {IImage} from "../../utils/types";

export const $brands = createStore<Array<IImage>>([]);
export const $brandIsLoading = createStore<boolean>(false);
