var requestFilter = {
        urls: ["https://*.twitter.com/*"]
    },

    extraInfoSpec = ['requestHeaders', 'blocking'],
    // Chrome will call your listener function in response to every
    // HTTP request
    handler = function (details) {

        var headers = details.requestHeaders,
            blockingResponse = {};

        for (var i = 0, l = headers.length; i < l; ++i) {
            if (headers[i].name == 'User-Agent') {
                headers[i].value = 'Mozilla/5.0 (Windows NT 9.0; WOW64; Trident/7.0; rv:11.0) like Gecko';
                break;
            }
        }

        blockingResponse.requestHeaders = headers;
        return blockingResponse;
    };

chrome.webRequest.onBeforeSendHeaders.addListener(handler, requestFilter, extraInfoSpec);