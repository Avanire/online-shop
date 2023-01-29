import {createEvent} from "effector";
import {ISlide} from "../../utils/types";

export const slidersRequest = createEvent<Array<ISlide>>();
