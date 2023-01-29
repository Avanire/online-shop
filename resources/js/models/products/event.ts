import {createEvent} from "effector";
import {IProduct} from "../../utils/types";

export const productRequest = createEvent<Array<IProduct>>();
export const productByCategoryRequest = createEvent<string>();
export const singleProductRequest = createEvent<string>();
