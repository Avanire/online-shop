import {
    $modalCallbackFormFailed,
    $modalCallbackFormLoading,
    $modalCallbackFormSuccess,
    $modalCheckoutFailed,
    $modalCheckoutLoading,
    $modalCheckoutSuccess,
    $modalStore
} from "./store";
import {sendCallbackRequest, sendCheckoutRequest, toggleModal} from "./event";
import {sendCallbackFx, sendCheckoutFx} from "./fx";
import {forward} from "effector";
import {deleteItemInLocalStorage} from "../../utils/utils";
import {modelCart} from "../cart";

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

$modalCheckoutSuccess.on(sendCheckoutFx.doneData, (_, success) => {
    modelCart.clearCart();
    return success;
});

$modalCheckoutLoading.on(sendCheckoutFx.pending, (_, isLoading) => isLoading);

$modalCheckoutFailed.on(sendCheckoutFx.fail, (isFail, _) => isFail);

forward({
    from: sendCheckoutRequest,
    to: sendCheckoutFx
});
