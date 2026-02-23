import {
    cookielessFetcher
} from '@api/fetcher';

export const fetchResources = async (lang = 'en') => {
    return await cookielessFetcher(`JSResourceApi/GetJSResource?lang=${lang}`);
};