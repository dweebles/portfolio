<template>
	<div id="usercard">
		<b-card>
		    <div class="img-wrapper">
		    	<img src="../assets/duy.jpg">
		    </div>
		    <h4 class="card-title">Duy Nguyen</h4>
			<b-card-text>
				Programmer, Cat Dad, Horror movie enthusiast, nerd living in St Pete FL
			</b-card-text>
	    </b-card>
	</div>
</template>

<script>
import { BCard, BCardText } from 'bootstrap-vue';

export default {
	name: "usercard",
	components: {
		BCard,
		BCardText
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
	#usercard {
		width: 650px;
		min-height: 450px;
		margin: 100px auto 0px auto;
	}
	.img-wrapper {
		position: relative;
	}
	img {
		width: 130px;
		height: 130px;
		border-radius: 50%;
		border: 1px solid #666;
		box-shadow: 0px 0px 10px #999;
		position: absolute;
		top: -50px;
		left: 39%;
	}
	h4.card-title {
		margin: 100px auto 0px auto;
		text-align: center;
	}
	.card-body {
		min-height: 250px;
	}
	.card-text {
		margin: 20px auto 0px auto;
		text-align: center;
	}
</style>
