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