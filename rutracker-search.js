// ==UserScript==
// @name         rutracker search
// @namespace    https://github.com/tims3l/userscripts
// @version      2026-01-14
// @description  rewrites the document name to the search text
// @author       tims3l
// @match        https://rutracker.org/forum/tracker.php*nm=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rutracker.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.title = document.getElementById('search-text').value;
})();
