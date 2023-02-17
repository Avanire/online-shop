import {createStore} from "effector";

export const $modalStore = createStore<boolean>(false);

export const $modalCallbackFormSuccess = createStore<boolean>(false);
export const $modalCallbackFormLoading = createStore<boolean>(false);
export const $modalCallbackFormFailed = createStore<boolean>(false);

export const $modalCheckoutSuccess = createStore(false);
export const $modalCheckoutLoading = createStore(false);
export const $modalCheckoutFailed = createStore(false);
