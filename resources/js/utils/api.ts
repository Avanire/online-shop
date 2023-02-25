import {API_URL} from "./constans";
import axios, {AxiosResponse} from "axios";
import {IAxios, ISendRequest} from "./types";

const checkResponse = (res: Response) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
}

const getRequest = (url: RequestInfo | URL, option: RequestInit = {}) => {
    return fetch(url, option).then(res => checkResponse(res));
}

const checkResponseAxios = (res: AxiosResponse) => {
    return res.statusText === 'OK' ? res.data : Promise.reject();
}

const getRequestAxios = (config: IAxios) => {
    return axios(config).then(res => checkResponseAxios(res));
}

export const subscriptionRequest = (email: string) => {
    const body = {
        email: email
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }

    return getRequest(`${API_URL}/subscription`, options);
}

export const sendCallbackForm = (payload: ISendRequest) => {
    const config = {
        method: 'post',
        url: '/',
        data: payload
    };

    return getRequestAxios(config);
}

export const sendCheckoutForm = (payload: ISendRequest) => {
    const config = {
        method: 'post',
        url: '/checkout',
        data: payload
    };

    return getRequestAxios(config);
}
