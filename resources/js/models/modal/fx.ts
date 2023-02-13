import {createEffect} from "effector/compat";
import {sendCallbackForm} from "../../utils/api";
import {ISendRequest} from "../../utils/types";

export const sendCallbackFx = createEffect((params: ISendRequest) => sendCallbackForm(params));
