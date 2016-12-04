chrome.contextMenus.create( {
	title: "Close this Tab",
	contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener(function() {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
  			chrome.tabs.remove(tabs[0].id);
	});
});