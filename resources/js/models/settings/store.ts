import {createStore} from "effector";

export const $address = createStore<string>('');
export const $addressIsLoading = createStore<boolean>(false);
export const $addressIsFailed = createStore<boolean>(false);

export const $phone = createStore<string>('');
export const $phoneIsLoading = createStore<boolean>(false);

export const $email = createStore<string>('');
export const $emailIsLoading = createStore<boolean>(false);

export const $workTime = createStore<string>('');
export const $workTimeIsLoading = createStore<boolean>(false);

export const $logo = createStore<string>('');
export const $logoIsLoading = createStore<boolean>(false);