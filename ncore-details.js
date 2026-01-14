// ==UserScript==
// @name         ncore details
// @namespace    https://github.com/tims3l/userscripts
// @version      2026-01-14
// @description  rewrites the document name to the torrent name
// @author       tims3l
// @match        https://ncore.pro/torrents.php?action=details&id=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ncore.pro
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.title = document.getElementsByClassName('torrent_reszletek_cim')[0].textContent;
})();
