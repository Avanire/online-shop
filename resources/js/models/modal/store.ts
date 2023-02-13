import {createStore} from "effector";

export const $modalStore = createStore<boolean>(false);

export const $modalCallbackFormSuccess = createStore<boolean>(false);
export const $modalCallbackFormLoading = createStore<boolean>(false);
export const $modalCallbackFormFailed = createStore<boolean>(false);
