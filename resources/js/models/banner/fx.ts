import {createEffect} from "effector";
import {getBanner} from "../../utils/api";

export const fetchMainBannerTopFx = createEffect((params: string) => getBanner(params));
export const fetchMainBannerMiddleFx = createEffect((params: string) => getBanner(params));
export const fetchMainBannerBotFx = createEffect((params: string) => getBanner(params));
