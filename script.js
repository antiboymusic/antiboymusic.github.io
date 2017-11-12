$( document ).ready(function() {
  var zeroes = $('.zeroes')
  var title = $('.title')
  var japanese = $('.japanese-text')
  setInterval(function(){
    var str = "";
    for (var i = 0; i< 160; i++) {
      str = str+ Math.round(Math.random()).toString();
      if(i%8 === 0 && i > 0){
        str += " "
      }
    }
    zeroes.text(str)

  }, 100)
  function on() {
    title.fadeTo(0,1);
    japanese.fadeTo(0,0);
  }
  function off() {
    japanese.fadeTo(0,1);
    title.fadeTo(0,0);
  }

  function textFlicker() {
    off();
    setTimeout(function(){
      on();
    }, 180+Math.random()*100)
  }

  (function loop() {
      var rand = Math.round(Math.random()*3000);
      setTimeout(function() {
              textFlicker();
              loop();
      }, rand);
  }());


});

window.addEventListener('load', function () {
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var source = audioCtx.createBufferSource();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'signal.mp3');
    xhr.responseType = 'arraybuffer';
    xhr.addEventListener('load', function (r) {
        audioCtx.decodeAudioData(
                xhr.response,
                function (buffer) {
                    source.buffer = buffer;
                    source.connect(audioCtx.destination);
                    source.loop = false;
                });
        source.start(0);
    });
    xhr.send();
});
