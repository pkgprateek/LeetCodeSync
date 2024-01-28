// eslint-disable-next-line no-unused-vars
const oAuth2 = {
  /**
   * Initialize
   */
  init() {
    this.KEY = 'leetcodesync_token';
    this.ACCESS_TOKEN_URL =
      'https://github.com/login/oauth/access_token';
    this.AUTHORIZATION_URL =
      'https://github.com/login/oauth/authorize';
    this.CLIENT_ID = '2d4b70ee70d32c79f7c9';
    this.CLIENT_SECRET = '3980d7cbc06c3a0afaee8d2f66f1452d091d0c94';
    this.REDIRECT_URL = 'https://github.com/'; // for example, https://github.com
    this.SCOPES = ['public_repo, read:user'];
  },

  /**
   * Begin
   */
  begin() {
    this.init(); // secure token params.

    let url = `${this.AUTHORIZATION_URL}?client_id=${this.CLIENT_ID}&redirect_uri${this.REDIRECT_URL}&scope=`;

    for (let i = 0; i < this.SCOPES.length; i += 1) {
      url += this.SCOPES[i];
    }

    chrome.storage.local.set({ pipe_leetcodesync: true }, () => {
      // opening pipe temporarily

      chrome.tabs.create({ url, active: true }, function () {
        window.close();
        chrome.tabs.getCurrent(function (tab) {
          chrome.tabs.remove(tab.id, function () {});
        });
      });
    });
  },
};
