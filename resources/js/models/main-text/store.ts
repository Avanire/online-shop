import {createStore} from "effector";

interface IMainText {
    heading: string;
    content: string;
    image: string;
}

export const $mainText = createStore<IMainText | null>(null);
export const $mainTextIsLoading = createStore<boolean>(false);