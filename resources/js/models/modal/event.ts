import {createEvent} from "effector";
import {ISendRequest} from "../../utils/types";

export const toggleModal = createEvent<boolean>('TOGGLE_MODAL');
export const toggleCheckoutModal = createEvent<boolean>('TOGGLE_CHECKOUT_MODAL');
export const sendCallbackRequest = createEvent<ISendRequest>('SEND_CALLBACK_REQUEST');
export const sendCheckoutRequest = createEvent<ISendRequest>('SEND_CHECKOUT_REQUEST');
