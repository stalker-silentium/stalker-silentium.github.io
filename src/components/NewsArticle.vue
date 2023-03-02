<script setup>
import {ref} from "vue"
const props = defineProps({
    title: String,
    content: String,
    images: String,
    video: String,
    post_name: String,
    date: String,
    time: String,
})
const embedURL = ref("")
if (props.video !== undefined) {
    const videoURL = new URL(props.video)
    embedURL.value = videoURL.href.replace("watch?v=","embed/")
}
const images = []
var imgCount = 0
if (props.images !== undefined) {
    images.value = props.images.split(",")
    imgCount = images.value.length
}
const currentSlide = ref(0)
const animCSS = ref("")
const currentImage = ref("")
if (props.images  && props.post_name) { currentImage.value = "/images/posts/"+props.post_name+"/"+images.value[currentSlide.value]+".webp" } else {animCSS.value = "display: none;"}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min
}
function nextSlide() {
    if (images.value.length < 2) { return }
    animCSS.value = "opacity: 0; transition: opacity 0.3s;"
    if (currentSlide.value >= imgCount - 1) {
        currentSlide.value = 0
    } else {
        currentSlide.value += 1
    }
    currentImage.value = "/images/posts/"+props.post_name+"/"+images.value[currentSlide.value]+".webp"
}
</script>

<template>
    <article>
        <h2 class="title damaged">{{ title }}</h2>
        <div class="slideshow-container" @click="nextSlide">
            <img loading="lazy" class="slideshow reactive" :src="`${currentImage}`">
            <iframe v-if="video" class="video" :src="`${embedURL}`" frameborder="0" allowfullscreen></iframe>
            <div :style="`${animCSS}`" class="slide-anim">
                <img loading="lazy" src="/images/click.webp" alt="click to">
                <img loading="lazy" src="/images/arrow.webp" alt="change">
                <img loading="lazy" src="/images/slideshow.webp" alt="slide">
            </div>
        </div>
        <p class="content" v-html="content"></p>
        <p v-if="date" class="date damaged">{{ date }} | {{ time }}</p>
    </article>
</template>

<style scoped>
article {
    background-color: rgba(0, 0, 0, 0.4);
    width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 2rem;
    margin: 1rem 0;
    padding: 3vmin;
	backdrop-filter: blur(0.7rem);
}
.title {
    text-align: center;
    font-size: 2.5rem;
    margin: 0 0 1rem 0;
    opacity: 0.85;
}
.content {
    font-family: Arial, Helvetica, sans-serif;
    width: 90%;
    opacity: 0.8;
}
.video {
    width: 100%;
    aspect-ratio: calc(16/9);
    border-radius: 1rem;
}
.slideshow {
    border-radius: 1rem;
    transition: all 0.3s;
    width: 100%;
    user-select: none;
    pointer-events: none;
}
.slideshow:hover {
    filter: brightness(1.1) contrast(1.1);
}
.slideshow-container:hover > .slide-anim {
    transition-delay: 1s;
    opacity: 0.5 ;
    transform: translate(-50%, -50%);
}
.slideshow-container {
    width: 90%;
    position: relative;
}
.slide-anim {
    transition-property: all;
    transition-duration: 0.3s;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    pointer-events: none;
}
.slide-anim > img {
    width: 3rem;
    margin: 0 0.5rem;
    user-select: none;
}
.date {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 0.5rem 1rem;
    margin: 0;
    align-self: flex-end;
    border-radius: 10rem;
    opacity: 0.6;
}
@media screen and (max-width: 700px) {
    article {
        width: 90vw;
    }
    .title {
        font-size: 2rem;
    }
}
</style>