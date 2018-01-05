chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    if (changeInfo.status === 'complete') {
        if (tab.url.indexOf('first.wifi.olleh.com/starbucks') !== -1) {

            chrome.tabs.executeScript(tabId, {
                file: 'js/agreement.js'
            });
        }

    }


});

