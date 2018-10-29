<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="#">Duy</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="nav-menu">
        <li v-for="link in menuItems" v-bind:key="link">
          <a v-bind:href="link.url" class="underlined underlined--thick">{{link.name}}</a>
        </li>
      </ul>
    </div>
  </nav> -->
  <nav class="navbar navbar-expand-md">
    <a class="navbar-brand" href="#">Duy</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul class="navbar-nav ml-auto">
        <li v-for="link in menuItems" v-bind:key="link">
          <a v-bind:href="link.url" class="nav-link underlined underlined--thick">{{link.name}}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Menu",
    data: function() {
      return {
        menuItems: [
          {
            name: "About",
            url: "#"
          },
          {
            name: "Work",
            url: "#"
          },
          {
            name: "Contact",
            url: "#"
          }
        ]
      }
    },
    props: {
      // items: Array
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    float: right;
  }
  li {
    display: inline;
    padding: 0 10px;
  }
  a:not(.navbar-brand) {
    color: #B392E8;
    font-size: 2em;
    flex: 1;
    line-height: 1.2;
    text-decoration: none;
    background-image: linear-gradient(to right, #E6FF30 0, #E6FF30 100%);
    background-position: 0 1.2em;
    background-size: 0 100%;
    background-repeat: no-repeat;
    transition: background .5s;
  }
  a:hover {
    background-size: 100% 100%;
  }
  nav {
    margin-top: 20px;
    background-color: #B7ECFF;
  }
  .underlined--thick {
    background-position: 0 -0.1em;
  }
</style>
