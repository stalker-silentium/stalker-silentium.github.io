import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).mount('#app')

const cursor = document.getElementById("cursor")
const moveCursor = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

}

window.addEventListener('mousemove', moveCursor)