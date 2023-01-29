import {createEffect} from "effector";
import {getMainText} from "../../utils/api";

export const fetchMainTextFx = createEffect(getMainText);
