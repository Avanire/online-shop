import {mainTextRequest} from "./event";
import {$mainText, $mainTextIsLoading} from "./store";
import {fetchMainTextFx} from "./fx";
import {forward} from "effector";

$mainText.on(fetchMainTextFx.doneData, (_, result) => result.data);
$mainTextIsLoading.on(fetchMainTextFx.pending, (_, isLoading) => isLoading);

forward({
    from: mainTextRequest,
    to: fetchMainTextFx
});