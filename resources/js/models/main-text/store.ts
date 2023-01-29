import {createStore} from "effector";
import {IMainText} from "../../utils/types";

export const $mainText = createStore<IMainText | null>(null);
export const $mainTextIsLoading = createStore<boolean>(false);
