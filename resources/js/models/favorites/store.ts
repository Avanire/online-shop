import {createStore} from "effector";
import {IProduct} from "../../utils/types";
import { persist } from 'effector-storage/local';

export const $favoriteProducts = createStore<Array<IProduct>>([], {name: 'favorite'});

persist({
    store: $favoriteProducts,
    serialize: (data) => JSON.stringify(data),
    deserialize: (data) => JSON.parse(data)
});
