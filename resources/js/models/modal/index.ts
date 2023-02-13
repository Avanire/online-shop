import {$modalStore, $modalCallbackFormFailed, $modalCallbackFormLoading, $modalCallbackFormSuccess} from "./store";
import {toggleModal, sendCallbackRequest} from "./event";

export const modelModal = {
    toggleModal,
    sendCallbackRequest,
    $modalStore,
    $modalCallbackFormLoading,
    $modalCallbackFormFailed,
    $modalCallbackFormSuccess
};
