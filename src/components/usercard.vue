<template>
  <div id="usercard">
    <b-card>
      <div class="img-wrapper">
        <img src="../assets/duy.png" class="animated bounce" />
      </div>
      <h4 class="card-title"></h4>
      <b-card-text> Programmer, Cat dad, living in St Pete FL </b-card-text>
      <b-card-body>
        <transition
          name="slide"
          enter-active-class="animated fadeIn"
          leave-class="animated fadeOut"
        >
          <router-view></router-view>
        </transition>
        <ul class="list-inline">
          <li>
            <a href=""
              ><img src="../assets/linkedin.png" width="20" height="20"
            /></a>
          </li>
          <li>
            <a href=""
              ><img src="../assets/instagram.png" width="20" height="20"
            /></a>
          </li>
        </ul>
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
  /* box-shadow: 0px 0px 10px #999; */
  position: absolute;
  top: -50px;
  left: 39%;
}
.card {
  /*border: 1px solid #999;*/
  box-shadow: 0px 0px 20px #999;
  background: #272822;
}
h4.card-title {
  margin: 100px auto 0px auto;
  text-align: center;
  color: #fd971f;
}
.card-body {
  margin-top: 20px;
  min-height: 250px;
  max-height: 450px;
}
.card-text {
  margin: 20px auto 0px auto;
  text-align: center;
  color: #e6db74;
}
.list-inline {
  text-align: center;
  position: absolute;
  bottom: 0px;
  left: 280px;
}
.list-inline li {
  display: inline;
  padding: 0.5rem;
}
</style>
