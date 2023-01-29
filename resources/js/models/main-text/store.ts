import {createStore} from "effector";
import {IMainText} from "../../Utils/types";

export const $mainText = createStore<IMainText | null>(null);
export const $mainTextIsLoading = createStore<boolean>(false);
