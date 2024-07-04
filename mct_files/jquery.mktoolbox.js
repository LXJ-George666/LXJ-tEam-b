/*!
 * Copyright 2017, mkblog.cn
 * Released under the MIT License
 * http://tool.mkblog.cn/
 */

// // 页面无刷新加载
// $(document).ready(function(){
//     $(document).pjax('a', 'body', {
//         fragment: 'body',
//         timeout: 5000, //超时，超过5s还没加载到网页即刷新整个网页
//     }).on('pjax:send', function() {
//         //加入loading动画
//         $('body').append("<div id='container' ><div id='loader-wrapper'><div id='loader'></div><div class='loader-section section-left'></div><div class='loader-section section-right'></div></div></div>");
//     }).on('pjax:complete', function() {
//         //解决多说加载问题
//         if ($('.ds-thread').length > 0) { 
//           if (typeof DUOSHUO !== 'undefined') 
//               DUOSHUO.EmbedThread('.ds-thread'); 
//           else 
//               $.getScript("//static.duoshuo.com/embed.js"); 
//         }
//         $('#container').remove(); //去掉loading动画
//     });
// });


// if(document.domain != 'tool.mkblog.cn' && document.domain != 'mkblog.cn'){
//     window.location.href='http://tool.mkblog.cn/';
// }


/*********************************************
 * 下面这些代码都是本站专用的，扒站的时候还请不要把这些也扒过去了！
 * 要不然会让人很无语的
 ********************************************/

// 百度自动提交代码
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https'){
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else{
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

