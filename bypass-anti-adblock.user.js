// ==UserScript==
// @name         bypass anti adblock
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  remove the anti adblock by just set the detection value to false
// @author       tassian
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @updateURL    https://github.com/tassian/bypass-youtube-anti-adblock/raw/main/bypass-anti-adblock.user.js
// @downloadURL  https://github.com/tassian/bypass-youtube-anti-adblock/raw/main/bypass-anti-adblock.user.js
// @grant        none
// ==/UserScript==

(function() {
    if (window.location.hostname === "www.youtube.com") { const adBlocksFound=false } })();
