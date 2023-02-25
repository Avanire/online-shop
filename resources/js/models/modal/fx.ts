import {createEffect} from "effector/compat";
import {sendCallbackForm, sendCheckoutForm} from "../../utils/api";
import {ISendRequest} from "../../utils/types";

export const sendCallbackFx = createEffect((params: ISendRequest) => sendCallbackForm(params));

export const sendCheckoutFx = createEffect((params: ISendRequest) => sendCheckoutForm(params));
