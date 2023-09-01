import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function(e) {
    localStorage.setItem(STORAGE_TIME_KEY, e.seconds)
};

player.on('timeupdate', throttle(onPlay,1000));

player.setCurrentTime(localStorage.getItem(STORAGE_TIME_KEY) || 0);
console.log(`${localStorage.getItem(STORAGE_TIME_KEY)} секунд`);



// Додаємо до проекту бібліотеку @vimeo/player та lodash.throttle як залежність проекту через npm.
// Команда $ npm i --save lodash.throttle 
// Команда $ npm install @vimeo/player
// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// // створюємо змінну для зручності
// const STORAGE_TIME_PLAY = 'videoplayer-current-time';

// // Починаємо відстежувати плеєр
// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// // Відстежування події timeupdate - оновлення часу відтворення, не частіше, ніж раз на секунду
// player.on('timeupdate', throttle(e => {
//   localStorage.setItem(STORAGE_TIME_PLAY, e.seconds)
// }, 1000)); 

// // Відновлення відтворення зі збереженої позиції, якщо пусто поверне 0
// player.setCurrentTime(localStorage.getItem(STORAGE_TIME_PLAY) || 0)
// console.log(`Ви зупинились на перегляді ${Math. round(localStorage.getItem(STORAGE_TIME_PLAY))} секунди фільму`);
