<script setup>
import TeamLogo from './components/TeamLogo.vue';
import SocialBar from './components/SocialBar.vue';
import NewsArticle from './components/NewsArticle.vue';
</script>

<template>
	<!---- Header ---->
	<header>
		<TeamLogo />
		<h1 class="stalker">Silentium Mod</h1>
		<SocialBar />
	</header>
	<!---- Main ---->
	<main>
		<section>
			<h1 class="damaged">Новости</h1>
			<NewsArticle
				title="Медведь просит есть"
				content="Медведь просит есть"
				date="Медведь просит есть"
				time="Медведь просит есть"
				video="https://youtube.com/watch?v=8FhGOV7fs64"
			/>
		</section>
	</main>
	<!---- Footer ---->
	<footer>
		<h3 style="font-family: 'Arial';">&#169 DAP team 2023</h3>
		<SocialBar />
	</footer>
</template>

<style scoped>
section {
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	backdrop-filter: blur(0.2rem);
}
section > h1 {
	font-size: 3rem;
	margin: 0.5rem;
}
footer {
	padding: 0 1.5rem;
	padding-top: 0.3rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
