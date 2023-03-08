import {createEvent} from "effector";
import { debounce } from 'patronum/debounce';
import {ISendRequest} from "../../utils/types";
import {sendSearchQueryFx} from "./fx";

export const requestSearchQuery = createEvent<ISendRequest>('SEND_SEARCH_QUERY');

const debounced = debounce({
    source: requestSearchQuery,
    timeout: 300,
    target: sendSearchQueryFx
});

export const setDefaultSearchStore = createEvent('SET_DEFAULT_SEARCH_STORE');
