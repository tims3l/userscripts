// ==UserScript==
// @name         ncore search
// @namespace    https://github.com/tims3l/userscripts
// @version      2026-01-14
// @description  rewrites the document name to the search text
// @author       tims3l
// @match        https://ncore.pro/torrents.php?oldal=1&tipus=all_own&mire=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ncore.pro
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.title = 'nc "' + document.getElementById('mire').value + '"';
})();
