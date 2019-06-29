$(function() {
  var one = document.querySelector('.one')
  var second = document.querySelector('.second')
  var btn1 = document.querySelector('.btn-danger')
  var btn2 = document.querySelector('.btn-info')


  function timer() {
    //设置定时器
    var time = 5;
    var timer = setInterval(function() {
      if (time == 0) {
        location.href = 'https://www.jianshu.com/p/6f95ae440fbb';
      } else {
        second.innerHTML = '还剩' + time + '秒后跳转到秘诀';
        time--;
      }
    }, 1000);
  }

  one.addEventListener('click', function(e) {
    window.confirm('想什么呢¿ 醒醒吧 ')
    timer();
  });
  // location.href = 'https://www.jianshu.com/p/6f95ae440fbb';
  btn1.addEventListener('click', function(e) {
    clearInterval(timer());
  })
  btn2.addEventListener('click', function(e) {
    timer();
  });




})