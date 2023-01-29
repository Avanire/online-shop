import {API_URL} from "./constans";

const checkResponse = (res: Response) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
}

const getRequest = (url: RequestInfo | URL, option: RequestInit = {}) => {
    return fetch(url, option).then(res => checkResponse(res));
}

export const getSettingByName = (name: string) => {
    return getRequest(`${API_URL}/settings/${name}`);
}

export const getArticles = () => {
    return getRequest(`${API_URL}/articles`);
}

export const getMenu = (name: string) => {
    return getRequest(`${API_URL}/menu/${name}`);
}

export const getProducts = () => {
    return getRequest(`${API_URL}/products`);
}

export const getProductsByCategory = (alias: string) => {
    return getRequest(`${API_URL}/categories/${alias}/products`)
}

export const getProduct = (alias: string) => {
    return getRequest(`${API_URL}/products/${alias}`);
}

export const getBanner = (position: string) => {
    return getRequest(`${API_URL}/banner/${position}`);
}

export const getBrands = () => {
    return getRequest(`${API_URL}/brands`);
}

export const getSliders = () => {
    return getRequest(`${API_URL}/sliders`);
}

export const getMainText = () => {
    return getRequest(`${API_URL}/main-text`);
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