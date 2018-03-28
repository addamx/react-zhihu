/**
 * 动态计算font-size的大小，适配各种设备
 * http://www.jianshu.com/p/afbf518cc891
 */
(function (doc, win) {
  var docEl = doc.documentElement,
    //orientationchange: 设备方向改变
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  // doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
