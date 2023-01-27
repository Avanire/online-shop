import {createEffect} from "effector";
import {getBrands} from "../../utils/api";

export const fetchBrandsFx = createEffect(getBrands);