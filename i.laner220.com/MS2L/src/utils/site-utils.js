export function getFullUrlPath(targetPath) {
    let baseUrl = location.origin;
    const sessionKey = location.pathname.split('/')[1];
    const isCookieless = sessionKey && /\(S/i.test(sessionKey);
    if (isCookieless) {
        baseUrl += `/${sessionKey}`;

    }
    return baseUrl + '/' + targetPath;
};