<template>
	<div id="app">
		<b-nav card-header>
			<a class="navbar-brand mr-auto p-2" href="#">
    			<img src="./assets/keyboard.png" width="30" height="30" alt="">
  			</a>
		    <b-nav-item class="p-2" to="/some/route/" exact exact-active-class="active">Projects</b-nav-item>
		    <b-nav-item class="p-2" to="/some/route/foo" exact exact-active-class="active">Contact</b-nav-item>
		</b-nav>
		<router-view></router-view>
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
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500&display=swap');
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	width: 650px;
	margin: 100px auto 0px auto;
}
body {
	background-color: #8BC6EC;
	background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
}
html {
	height: 100%;
}
.nav {
	font-family: 'Barlow Condensed', sans-serif;
}
.nav-item a {
	color: #000;
}
</style>
