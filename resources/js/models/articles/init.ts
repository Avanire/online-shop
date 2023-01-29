import {articleRequest} from "./event";
import {$articles} from "./store";

$articles.on(articleRequest, (_, result) => result);
