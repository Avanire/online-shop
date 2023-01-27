import {mainBannerBotRequest, mainBannerMiddleRequest, mainBannerTopRequest} from "./event";
import {
    $mainBannerBot,
    $mainBannerBotIsLoading,
    $mainBannerMiddle,
    $mainBannerMiddleIsLoading,
    $mainBannerTop,
    $mainBannerTopIsLoading
} from "./store";

export const modelBanner = {
    mainBannerTopRequest,
    $mainBannerTop,
    $mainBannerTopIsLoading,
    mainBannerMiddleRequest,
    $mainBannerMiddle,
    $mainBannerMiddleIsLoading,
    mainBannerBotRequest,
    $mainBannerBot,
    $mainBannerBotIsLoading
}