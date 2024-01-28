<h1 align="center">
  Automatically sync your code to GitHub.
</h1>


## What is LeetCodeSync?
<p>A fork of <a href="https://github.com/QasimWani/LeetHub">LeetHub</a> created by user <a hreaf="https://github.com/QasimWani">Qasim Wani</a>. This is a chrome extension that automatically pushes your code to GitHub when you pass all tests on a <a href="http://leetcode.com/">Leetcode</a> problem. </p>


## Why did I forked LeetHub?
<p>
I had two major reasons to fork LeetHub:
  <ul>
    <li><a href="https://github.com/QasimWani/LeetHub">LeetHub</a> has not been updated since last 2-3 years and given the new chrome standards, I wanted somethig stable for myself.</li>
    <li>I was having few permission issues while trying to authenticate.</li>
  </ul>
  Therefore, all the updates made to this fork are for my convinience. But, everyone is welcome to use this extension as they please.
</p>


## How does LeetCodeSync work?     
<h4> Your LeetHub portfolio could look like <a href="https://github.com/tanyarajhans/LeetCode"> this</a>!  </h4>
<p>It's as simple as:</p>
<ol>
  <li>After installation, launch LeetHub.</li>
  <li>Click on "authorize with GitHub" button to automatically set up your account with LeetHub.</li>
  <li>Setup an existing/new repository with LeetHub (private by default) by clicking "Get Started" button.</li>
  <li>Begin Leetcoding! To view your progress, simply click on the extension!</li>
</ol>


#### BONUS: Star [this repository](https://github.com/pkgprateek/LeetCodeSync) for further development of features. If you want a particular feature, simply [request](https://github.com/pkgprateek/LeetCodeSync/labels/feature) for it!



# How to set up LeetHub for local development?

<ol>
  <li>Fork this repo and clone to your local machine</li>
  <li>Go to <a href="chrome://extensions">chrome://extensions</a> </li>
  <li>Enable <a href="https://www.mstoic.com/enable-developer-mode-in-chrome/">Developer mode</a> by toggling the switch on top right corner</li>
  <li>Click 'Load unpacked'</li>
  <li>Select the entire LeetHub folder</li>
  <li>Run "npm run setup" to install the developer dependencies</li>
</ol>

Other npm commands available:

```
npm run               Show list of commands available
npm run format        Auto-format JavaScript, HTML/CSS
npm run format-test   Test all code is formatted properly
npm run lint          Lint JavaScript
npm run lint-test     Test all code is linted properly
```

#### And that should be it! Get Hacking...
