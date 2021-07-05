<template>
	<div id="app">
		<!-- <Menu /> -->
		<UserCard />
	</div>
</template>

<script>
import About from "./components/About.vue";
import Menu from "./components/menu.vue";
import UserCard from "./components/usercard.vue";

export default {
	name: "app",
	components: {
		About,
		Menu,
		UserCard
	},
	camera: null,
	scene: null,
	renderer: null,
	mesh: null,
	methods: {},
	mounted() {}
};
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
body {
	background-color: #8BC6EC;
	background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
}
html {
	height: 100%;
}
</style>
