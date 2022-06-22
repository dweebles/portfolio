<template>
  <div id="usercard">
    <b-card>
      <div class="img-wrapper">
        <img src="https://avatars.githubusercontent.com/u/1853843?v=4" class="animated bounce" />
      </div>
      <h4 class="card-title"></h4>
      <b-card-text> <b>Programmer &amp; Cat Dad </b> </b-card-text>
      <b-card-body>
        <transition
          name="slide"
          enter-active-class="animated fadeIn"
          leave-class="animated fadeOut"
        >
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
  methods: {},
  mounted() {},
};
</script>

<style scoped>
#usercard {
  font-family: "Barlow Condensed", sans-serif;
  width: 650px;
  min-height: 500px;
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
  /* box-shadow: 0px 0px 10px #999; */
  position: absolute;
  top: -50px;
  left: 39%;
}
.card {
  /*border: 1px solid #999;*/
  box-shadow: 0px 0px 40px #111;
  background: #272822;
}
h4.card-title {
  margin: 100px auto 0px auto;
  text-align: center;
  color: #fd971f;
}
.card-body {
  margin-top: 20px;
  min-height: 300px;
  max-height: 500px;
}
.card-text {
  margin: 20px auto 0px auto;
  text-align: center;
  color: #e6db74;
}
</style>
