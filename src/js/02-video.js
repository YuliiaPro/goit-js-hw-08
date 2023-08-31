import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function(e) {
    localStorage.setItem(STORAGE_TIME_KEY, e.seconds)
};

player.on('timeupdate', throttle(onPlay,1000));

player.setCurrentTime(localStorage.getItem(STORAGE_TIME_KEY));
