<template>
  <div id="app">
    <Menu />
    <div id="container"></div>
    <About msg="Hello there..."/>
  </div>
</template>

<script>
import About from "./components/About.vue";
import Menu from "./components/menu.vue";
import * as Three from "three";

export default {
  name: "app",
  components: {
    About,
    Menu
  },
  camera: null,
  scene: null,
  renderer: null,
  mesh: null,
  methods: {
    init: function() {
      let container = document.getElementById('container');

      this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.01, 10);
      this.camera.position.z = 1;

      this.scene = new Three.Scene();

      let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
      let material = new Three.MeshNormalMaterial();

      this.mesh = new Three.Mesh(geometry, material);
      this.scene.add(this.mesh);

      this.renderer = new Three.WebGLRenderer({antialias: true});
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);
    },
    animate: function () {
      requestAnimationFrame(this.animate);
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
    this.init();
    this.animate()
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#container {
  position: absolute;
  x: 0;
  y: 0;
  width: 100%;
  height: 70%;
  z-index: 0;
}
body {
  background-color: #B7ECFF;
}
</style>
