import {
    getFullUrlPath
} from '@utils/site-utils';

const catchError = response => {
    if (response.status >= 200 && response.status <= 299) {
        return response.json();
    } else {
        return response.json().then(
            json => {
                throw json;
            }
        );
    }
};

export const fetcher = (...args) => fetch(...args).then(catchError);

export const cookielessFetcher = async (url, option = {}) => {
    const ctcd = window._CottonCandy;

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...(ctcd ? {
            'x-jwtoken': localStorage.getItem('jwtoken')
        } : null)
    };

    const apiURL = ctcd ? ctcd.CloudUrlParser(url) : getFullUrlPath(url);
    const fetchMethod = ctcd ? fetch : fetcher;

    let response = await fetchMethod(apiURL, {
        headers: ctcd ? ctcd.GetHeaders(headers) : headers,
        ...option
    });

    if (ctcd) {
        ctcd.SaveTokenWithFetch(response);
        response = catchError(response);
    };

    return response;
};