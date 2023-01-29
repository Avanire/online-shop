import {createEvent} from "effector";
import {IArticle} from "../../Utils/types";

export const articleRequest = createEvent<Array<IArticle>>();
