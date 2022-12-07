'use strict';
const cheerio = require('cheerio');

/**
 * 在页面插入新顶部图
 * @param {cheerio.Root} $ Root
 */
function insertTopImg($) {
    let header = $('#page-header');
    if (header.length === 0) return;
    let background = header.css('background-image');
    if (!background) return;
    $('#post, #page, #archive, #tag, #category').prepend(`<div class="top-img" style="background-image: ${background};"></div>`);
}

hexo.extend.filter.register('after_render:html', function(str, data) {
    let $ = cheerio.load(str, {
        decodeEntities: false
    });
    insertTopImg($);
    return $.html();
});

var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = '大哥大姐别走呀，我生气了😠~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = 'Welcome 帅哥～小姐姐～';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });