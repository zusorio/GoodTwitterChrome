"use strict";

const requestFilter = {
    urls: ["https://*.twitter.com/*"]
};

const extraInfoSpec = ['requestHeaders', 'blocking'];
// Chrome will call your listener function in response to every
// HTTP request
const handler = function (details) {

    let headers = details.requestHeaders;
    let blockingResponse = {};

    for (let i = 0, const l = headers.length; i < l; ++i) {
        if (headers[i].name == 'User-Agent') {
            headers[i].value = 'Mozilla/5.0 (Windows NT 9.0; WOW64; Trident/7.0; rv:11.0) like Gecko';
            break;
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
