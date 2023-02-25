import {createStore} from "effector";

export const $modalStore = createStore<boolean>(false);

export const $modalCallbackFormSuccess = createStore<boolean>(false);
export const $modalCallbackFormLoading = createStore<boolean>(false);
export const $modalCallbackFormFailed = createStore<boolean>(false);

export const $modalCheckoutSuccess = createStore<boolean>(false);
export const $modalCheckoutLoading = createStore<boolean>(false);
export const $modalCheckoutFailed = createStore<boolean>(false);
