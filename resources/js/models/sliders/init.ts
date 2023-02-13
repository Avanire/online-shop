import {slidersRequest} from "./event";
import {$sliders} from "./store";

$sliders.on(slidersRequest, (_, result) => result);
