chrome.runtime.onMessage.addListener(function () {

    if (request.action == "show") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.pageAction.show(tabs[0].id);
            //use if you know the tabId
            //chrome.pageAction.show(tabId)
        });
    }
});