import {$modalStore} from "./store";
import {toggleModal} from "./event";

$modalStore.on(toggleModal, (_, action) => action);
