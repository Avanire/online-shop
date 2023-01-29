import {createEffect} from "effector";
import {getBrands} from "../../Utils/api";

export const fetchBrandsFx = createEffect(getBrands);
