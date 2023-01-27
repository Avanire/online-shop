import {createEvent} from "effector";

export const productRequest = createEvent();
export const productByCategoryRequest = createEvent<string>();
export const singleProductRequest = createEvent<string>();