import {createStore} from "effector";
import {IBanner} from "../../Utils/types";

export const $mainBannerTop = createStore<IBanner | null>(null);
export const $mainBannerTopIsLoading = createStore<boolean>(false);

export const $mainBannerMiddle = createStore<IBanner | null>(null);
export const $mainBannerMiddleIsLoading = createStore<boolean>(false);

export const $mainBannerBot = createStore<IBanner | null>(null);
export const $mainBannerBotIsLoading = createStore<boolean>(false);
