import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const getCurrentTimeUpdate = localStorage.getItem('video-current-time');

const setCurrentTimeUpdate = function (data) {
  const currentTime = data.seconds;
  console.log(data.seconds);
  localStorage.setItem('video-current-time', currentTime);
};

player.setCurrentTime(getCurrentTimeUpdate);

player.on('timeupdate', throttle(setCurrentTimeUpdate, 1000));
