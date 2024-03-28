document.getElementById('playButton').addEventListener('click', function() {
    var video = document.getElementById('myVideo1');
    if (video.paused) {
      video.play();
      this.textContent = 'Pause';
    } else {
      video.pause();
      this.textContent = 'Play';
    }
  });

  