const keys = document.querySelectorAll('.key');
const audios = document.querySelectorAll('audio');


document.addEventListener('keydown', (event) => {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

  if (!key || !audio) return; 

  key.classList.add('playing');
  audio.currentTime = 0; 
  audio.play(); 

  
  const removePlayingClass = () => {
    key.classList.remove('playing');
    key.removeEventListener('transitionend', removePlayingClass);
  };

  key.addEventListener('transitionend', removePlayingClass);
});
