import {createEffect} from "effector";
import {getMainText} from "../../Utils/api";

export const fetchMainTextFx = createEffect(getMainText);
