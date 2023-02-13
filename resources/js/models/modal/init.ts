import {$modalCallbackFormFailed, $modalCallbackFormLoading, $modalCallbackFormSuccess, $modalStore} from "./store";
import {sendCallbackRequest, toggleModal} from "./event";
import {sendCallbackFx} from "./fx";
import {forward} from "effector";

$modalStore.on(toggleModal, (_, action) => action);

$modalCallbackFormSuccess
    .on(sendCallbackFx.doneData, (_, success) => success);

$modalCallbackFormLoading
    .on(sendCallbackFx.pending, (_, isLoading) => isLoading);

$modalCallbackFormFailed
    .on(sendCallbackFx.fail, (isFail, _) => isFail);

forward({
    from: sendCallbackRequest,
    to: sendCallbackFx
});
