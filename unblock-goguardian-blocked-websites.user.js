// ==UserScript==
// @name         Unblock GoGuardian Blocked websites
// @namespace    https://raw.githubusercontent.com/xyti/userscripts/main/unblock-goguardian-blocked-websites.user.js
// @version      1
// @description  You have to download Iframe-allow(https://chrome.google.com/webstore/detail/iframe-allow/gifgpciglhhpmeefjdmlpboipkibhbjg) first to access most websites. Works for websites that use X-Frame-Options: allow or X-Frame-Options: deny.
// @author       xyti <https://github.com/xyti>
// @match        http://blocked.com-default.ws/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.documentElement.innerHTML='<!DOCTYPE HTML><html><head><title>Blocked</title></head><body><style>html,body{border:0;margin:0;padding:0;height:100%}iframe{border:0;margin:0;display:block}</style><iframe src="http://'+new URL(window.location.href).searchParams.get("url")+'" height=100% width=100%></iframe></body></html>';
})();
