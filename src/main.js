import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).mount('#app')

const cursor = document.getElementById("cursor")
const video = document.getElementById("background")
video.playbackRate = 1.4;
const moveCursor = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

}
const pickedNumber = Math.random() * 100

if (pickedNumber < 2) {
    video.setAttribute("src","/rare.mp4")
} else if (pickedNumber  < 30) {
    video.setAttribute("src","/video2.mp4")
} else {
    video.setAttribute("src","/video.mp4")
}

window.addEventListener('mousemove', moveCursor)