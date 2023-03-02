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
				title="Скриншоты при ясной погоде"
				content="<span style='font-size: 1.2rem;'><b>Привет сталкеры!<br><br></b></span>
				Как и обещали новые скрины локации, на этот раз в ясную погоду."
				date="26.02.2023"
				time="21:19"
				post_name="sun-post"
				images="1,2,3"
			/>
			<NewsArticle
				title="Мрачные скриншоты"
				content="<span style='font-size: 1.2rem;'><b>Привет, Всем!<br><br></b></span>
				Делимся ещё несколькими скринами из зоны. Как всегда мрачными.
				<br>Кстати интересно ваше мнение. По поводу, что публиковать и при какой погоде."
				date="19.02.2023"
				time="14:22"
				post_name="fog-post"
				images="1,2,3"
			/>
			<NewsArticle
				title="Новые модели зданий"
				content="<span style='font-size: 1.2rem;'><b>Привет сталкеры.<br><br></b></span>
				Публикуем ещё несколько скринов с разработки.
				<br><br>Мы активно занимаемся разработкой новых моделей для игры, в том числе и новых зданий, одно из которых мы и презентуем."
				date="12.02.2023"
				time="17:39"
				post_name="buildings-post"
				images="1,2,3"
			/>
			<NewsArticle
				title="Переход на Advanced X-ray"
				content="Приветствуем исследователей зоны!
				<br>После долгих новогодних праздников мы наконец-то готовы вас порадовать нашим прогрессом за декабрь и рассказать о работе, которая проводится в данный момент. Прежде всего рады сообщить, что мы сменили движок модификации с базового ЗП на более современный Advanced X-ray 1.8.61, который на голову выше своего классического предшественника с технической точки зрения. Ниже перечислим краткий список выполненных работ и то, над чем в данный момент идёт работа.
				<br>
				<br>Движок <a href='https://ap-pro.ru/forums/topic/2813-advanced-x-ray/' target='_blank'>Advanced X-ray 1.8.61</a> содержит в себе:
				<ul>
					<li>Поддержку x64 бит</li>
					<li>Улучшенное освещение</li>
					<li>Новые погодные циклы</li>
					<li>Адаптированный оружейный пак stcop3.4</li>
					<li>Расширенные возможности анимаций</li>
					<li>Туман в низинах</li>
					<li>Дополнительные слоты</li>
					<li>Движковая симуляция жажды</li>
				</ul>
				<br>
				Также нашей командой:
				<ul>
					<li>Адаптирована система напарников</li>
					<li>Ведётся доработка HUD</li>
					<li>Ведётся правка моделей</li>
					<li>Активно обустраиваются и дорабатываются локации</li>
					<li>Разрабатываются две новые аномалии</li>
					<li>Разрабатываются новые модели зданий.</li>
				</ul>
				<br>В начале следующего месяца мы подготовим для вас отчёт за Январь, а уже весной вас будет ждать наш новый тизер.
				<br>Удачной охоты, сталкеры!"
				date="16.01.2023"
				time="14:00"
				post_name="xray-post"
				images="1,2,3"
			/>
			<NewsArticle
				title="Мод участвовал в AP-PRO Showcase 2022"
				content="
				<span style='font-size: 1.2rem'><b>Доброго дня тебе, сталкер!</b></span><br><br>
				Вчера тизер нашего мода участвовал в<br><b><i><a target='_blank' href='https://youtu.be/mebw3975qtY?t=1801'>AP-PRO Showcase 2022</a></i></b>. Представляем наш тизер вашему вниманию!<br><br>
				<ul>
					<li>Представленный тизер не отображает финальный вид нашего мода.</li>
					<li>В планах на ближайшее время улучшить графику, а так же поднять качество съемки контента для фанатов.</li>
					<li>В данный момент идёт активный набор в команду новых специалистов, чтобы ускорить процесс разработки и сделать его эффективнее.</li>
				</ul>
				Более подробную информацию о ходе разработки и модификации в целом, вы сможете узнавать из наших ежемесячных дневников, выход первого дневника намечен на декабрь.<br><br>
				
				Релиз модификации, на данный момент, планируется на конец 2023 года."
				date="27.11.2022"
				time="17:45"
				video="https://www.youtube.com/watch?v=DqfdVHNvlGM"
			/>
		</section>
	</main>
	<!---- Footer ---->
	<footer>
		<h3 style="font-family: 'Arial';">&#169 2023 DAP team</h3>
		<SocialBar />
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
footer {
	padding: 0 1.5rem;
	padding-top: 0.3rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
    background: rgba(15,15,15,1);
}
</style>
