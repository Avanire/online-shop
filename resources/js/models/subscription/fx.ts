import {createEffect} from "effector";
import {subscriptionRequest} from "../../Utils/api";

export const fetchSubscribeFx = createEffect((params: string) => subscriptionRequest(params));
