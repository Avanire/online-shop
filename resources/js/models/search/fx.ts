import {createEffect} from "effector";
import {sendSearchQuery} from "../../utils/api";
import {ISendRequest} from "../../utils/types";

export const sendSearchQueryFx = createEffect((query: ISendRequest) => sendSearchQuery(query));
