let window = self;

function handleMessage(request) {
  if (
    request &&
    request.closeWebPage === true &&
    request.isSuccess === true
  ) {
    /* Set username */
    chrome.storage.local.set(
      { leetsync_username: request.username },
      () => {
        window.localStorage.leetsync_username = request.username;
      },
    );

    /* Set token */
    chrome.storage.local.set(
      { leetsync_token: request.token },
      () => {
        window.localStorage[request.KEY ?? 'leetsync_token'] =
          request.token;
      },
    );

    /* Close pipe */
    chrome.storage.local.set({ pipe_leetsync: false }, () => {
      console.log('Closed pipe.');
    });

    chrome.tabs.query(null, function (tab) {
      chrome.tabs.remove(tab.id);
    });

    /* Go to onboarding for UX */
    const urlOnboarding = chrome.runtime.getURL('welcome.html');
    chrome.tabs.create({ url: urlOnboarding, active: true }); // creates new tab
  } else if (
    request &&
    request.closeWebPage === true &&
    request.isSuccess === true
  ) {
    alert(
      'Something went wrong while trying to authenticate your profile!',
    );
    chrome.tabs.query(null, function (tab) {
      chrome.tabs.remove(tab.id);
    });
  }
}

chrome.runtime.onMessage.addListener(handleMessage);
