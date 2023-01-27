import {mainBannerBotRequest, mainBannerMiddleRequest, mainBannerTopRequest} from "./event";
import {
    $mainBannerBot,
    $mainBannerBotIsLoading,
    $mainBannerMiddle,
    $mainBannerMiddleIsLoading,
    $mainBannerTop,
    $mainBannerTopIsLoading
} from "./store";
import {fetchMainBannerBotFx, fetchMainBannerMiddleFx, fetchMainBannerTopFx} from "./fx";
import {forward} from "effector";

$mainBannerTop.on(fetchMainBannerTopFx.doneData, (_, result) => result.data);
$mainBannerTopIsLoading.on(fetchMainBannerTopFx.pending, (_, isLoading) => isLoading);

$mainBannerMiddle.on(fetchMainBannerMiddleFx.doneData, (_, result) => result.data);
$mainBannerMiddleIsLoading.on(fetchMainBannerMiddleFx.pending, (_, isLoading) => isLoading);

$mainBannerBot.on(fetchMainBannerBotFx.doneData, (_, result) => result.data);
$mainBannerBotIsLoading.on(fetchMainBannerBotFx.pending, (_, isLoading) => isLoading);

forward({
    from: mainBannerTopRequest,
    to: fetchMainBannerTopFx
});

forward({
    from: mainBannerMiddleRequest,
    to: fetchMainBannerMiddleFx
});

forward({
    from: mainBannerBotRequest,
    to: fetchMainBannerBotFx
});