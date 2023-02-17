import {
    $modalCallbackFormFailed,
    $modalCallbackFormLoading,
    $modalCallbackFormSuccess,
    $modalCheckoutFailed,
    $modalCheckoutLoading,
    $modalCheckoutSuccess,
    $modalStore
} from "./store";
import {sendCallbackRequest, sendCheckoutRequest, toggleCheckoutModal, toggleModal} from "./event";

export const modelModal = {
    toggleModal,
    sendCheckoutRequest,
    toggleCheckoutModal,
    sendCallbackRequest,
    $modalStore,
    $modalCallbackFormLoading,
    $modalCallbackFormFailed,
    $modalCallbackFormSuccess,
    $modalCheckoutFailed,
    $modalCheckoutLoading,
    $modalCheckoutSuccess
};
