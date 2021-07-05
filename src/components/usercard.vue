<template>
	<div id="usercard">
		<b-card>
		    <div class="img-wrapper">
		    	<img src="../assets/duy.jpg" class="animated bounce">
		    </div>
		    <h4 class="card-title">Duy Nguyen</h4>
			<b-card-text>
				Programmer, Cat dad, Horror movie enthusiast, Nerd living in St Pete FL
			</b-card-text>
			 <b-card-body>
			 	<transition name="slide"
			 				enter-active-class="animated fadeIn"
			 				leave-class="animated fadeOut">
					<router-view></router-view>
				</transition>
				<ul class="list-inline">
					<li><a href=""><img src="../assets/linkedin.png" width="20" height="20" /></a></li>
					<li><a href=""><img src="../assets/instagram.png" width="20" height="20" /></a></li>
				</ul>
			</b-card-body>
	    </b-card>
	</div>
</template>

<script>

export default {
	name: "usercard",
	components: {},
	camera: null,
	scene: null,
	renderer: null,
	mesh: null,
	methods: {},
	mounted() {}
};
</script>

<style>
	#usercard {
		font-family: 'Barlow Condensed', sans-serif;
		width: 650px;
		min-height: 450px;
		margin: 5px auto 0px auto;
	}
	.img-wrapper {
		position: relative;
	}
	.img-wrapper img {
		width: 130px;
		height: 130px;
		border-radius: 50%;
		border: 1px solid #666;
		box-shadow: 0px 0px 10px #999;
		position: absolute;
		top: -50px;
		left: 39%;
	}
	.card {
		/*border: 1px solid #999;*/
		box-shadow: 0px 0px 20px #999;
	}
	h4.card-title {
		margin: 100px auto 0px auto;
		text-align: center;
	}
	.card-body {
		margin-top: 20px;
		min-height: 250px;
		max-height: 450px;
	}
	.card-text {
		margin: 20px auto 0px auto;
		text-align: center;
	}
	.list-inline {
		text-align: center;
		position: absolute;
		bottom: 0px;
		left: 280px;
	}
	.list-inline li {
		display: inline;
		padding: .5rem;
	}
</style>
