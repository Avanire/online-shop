import {createEffect} from "effector";
import {getSettingByName} from "../../utils/api";

export const fetchAddressFx = createEffect((params: string) => getSettingByName(params));
export const fetchPhoneFx = createEffect((params: string) => getSettingByName(params));
export const fetchEmailFx = createEffect((params: string) => getSettingByName(params));
export const fetchWorkTimeFx = createEffect((params: string) => getSettingByName(params));
export const fetchLogoFx = createEffect((params: string) => getSettingByName(params));