import {createStore} from "effector";

export const $subscribePending = createStore<boolean>(false);
export const $subscribeFailed = createStore<boolean>(false);
export const $subscribeSuccess = createStore<string>('');