import {createEvent} from "effector";
import {ISendRequest} from "../../utils/types";

export const toggleModal = createEvent<boolean>('TOGGLE_MODAL');
export const sendCallbackRequest = createEvent<ISendRequest>('SEND_CALLBACK_REQUEST');
