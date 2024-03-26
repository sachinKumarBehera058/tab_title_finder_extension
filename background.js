let text = 'sachin';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ text });
});
