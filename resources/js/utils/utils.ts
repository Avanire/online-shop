import {IProduct} from "./types";

export function classNames(...classes: Array<string>) {
    return classes.filter(Boolean).join(' ')
}

export const setToLocalStorage = (name: string, value: string | number | boolean | Array<IProduct>) => {
    localStorage.setItem(name, JSON.stringify(value));
}

export const getLocalStorage = (name: string) => {
    const value = localStorage.getItem(name);

    return typeof value === 'string' ? JSON.parse(value) : null;
}

export const deleteItemInLocalStorage = (name: string) => {
    localStorage.removeItem(name);
}
