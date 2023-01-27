import {subscribeRequest} from "./event";
import {$subscribePending, $subscribeSuccess} from "./store";
import {fetchSubscribeFx} from "./fx";
import {forward} from "effector";

$subscribePending.on(fetchSubscribeFx.pending, (_, isLoading) => isLoading);

$subscribeSuccess.on(fetchSubscribeFx.doneData, (_, result) => result.message);

forward({
    from: subscribeRequest,
    to: fetchSubscribeFx
});