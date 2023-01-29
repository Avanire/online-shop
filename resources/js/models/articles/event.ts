import {createEvent} from "effector";
import {IArticle} from "../../utils/types";

export const articleRequest = createEvent<Array<IArticle>>();
