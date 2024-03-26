document.addEventListener('DOMContentLoaded', function () {
    const extractButton = document.getElementById('detail-button');
    const titleContainer = document.getElementById('title-container');
  
    extractButton.addEventListener('click', function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentTab = tabs[0];
        const tabTitle = currentTab.title;
        titleContainer.textContent = tabTitle;
      });
    });
  });
  