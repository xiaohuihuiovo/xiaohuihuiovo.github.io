function timer() {

  //设置定时器
  var second = document.querySelector('.second')
  var time = 5;
  var timer = setInterval(function() {
    if (time == 0) {
      location.href = 'https://www.baidu.com';
    } else {
      // h3.style.display = 'block';
      second.innerHTML = '还剩' + time + '秒后跳转到秘诀';
      time--;
    }
  }, 1000);
}