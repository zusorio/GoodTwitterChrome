"use strict";

const requestFilter = {
    urls: ["https://*.twitter.com/*"]
};

const extraInfoSpec = ['requestHeaders', 'blocking', 'extraHeaders'];
// Chrome will call your listener function in response to every
// HTTP request
const handler = function (details) {

    let headers = details.requestHeaders;
    let blockingResponse = {};
    const l = headers.length;
    for (let i = 0; i < l; ++i) {
        if (headers[i].name === 'User-Agent') {
            headers[i].value = 'Opera/9.80 (Windows NT 6.1; WOW64) Presto/2.12.388 Version/12.18';
        } else if (headers[i].name === 'Cookie') {
            headers[i].value = headers[i].value.replace(/rweb_optin=.*?(; .*)?$/i, "rweb_optin=off$1");
        }
    }

    blockingResponse.requestHeaders = headers;
    return blockingResponse;
};

function removeCookie() {
    chrome.browsingData.remove({"origins": ["https://twitter.com"]}, {"cacheStorage": true, "cache": true});
    chrome.tabs.query({url: "*://*.twitter.com/*"}, function (result) {
        result.forEach(function (tab) {
            chrome.tabs.reload(tab.id)
        })
    });
}

chrome.webRequest.onBeforeSendHeaders.addListener(handler, requestFilter, extraInfoSpec);
chrome.runtime.onInstalled.addListener(removeCookie);
