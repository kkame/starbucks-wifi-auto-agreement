chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    if (changeInfo.status === 'complete') {
        if (tab.url.indexOf('first.wifi.olleh.com/starbucks') !== -1) {

            chrome.tabs.executeScript(tabId, {
                file: 'js/agreement.js'
            });
        }

        else if (tab.url.indexOf('http://www.istarbucks.co.kr/util/wireless.do') !== -1) {

            chrome.tabs.executeScript(tabId, {
                file: 'js/move_origin_page.js'
            });
        }

    }


});

