import {subscribeRequest} from "./event";
import {$subscribeSuccess, $subscribePending} from "./store";

export const modelSubscribe = {
    subscribeRequest,
    $subscribePending,
    $subscribeSuccess
}