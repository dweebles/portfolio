<template>
	<div id="usercard">
		<b-card>
		    <div class="img-wrapper">
		    	<img src="../assets/duy.jpg">
		    </div>
		    <h4 class="card-title">Duy Nguyen</h4>
			<b-card-text>
				Programmer, Cat dad, Horror movie enthusiast, Nerd living in St Pete FL
			</b-card-text>
			 <b-card-body>
			 	<transition name="slide"
			 				enter-active-class="animated zoomIn"
			 				leave-class="animated zoomOut">
					<router-view></router-view>
				</transition>
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
		/*box-shadow: 0px 0px 20px #999;*/
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
	/*.slide-fade-enter-active {
		transition: all .2s ease;
	}
	.slide-fade-leave-active {
		transition: all .3s ease;
	}
	.slide-fade-enter, .slide-fade-leave-to {
		opacity: 0;
	}*/
</style>
