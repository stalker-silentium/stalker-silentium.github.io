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
				title="Вышло обновление 2.2!"
				content="eeereynsrynsernyseeereynsrynsernyseeereyns<br>rynsernyseeereynsrynsernyseeereynsrynsernyseeereynsrynsernyseeereynsrynsernyseeereynsrynsernys"
				post_name="test"
				images="1,2,3,4"
				date="23.02.2023"
				time="17:45"
			/>
		</section>
	</main>
	<!---- Footer ---->
	<footer>
		
	</footer>
</template>

<style scoped>
section {
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
}
section > h1 {
	font-size: 3rem;
	margin: 0.5rem;
}
</style>
