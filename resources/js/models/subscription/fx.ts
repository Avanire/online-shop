import {createEffect} from "effector";
import {subscriptionRequest} from "../../utils/api";

export const fetchSubscribeFx = createEffect((params: string) => subscriptionRequest(params));
