<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="#">Duy</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="nav-menu">
        <li v-for="link in menuItems" v-bind:key="link">
          <a v-bind:href="link.url">{{link.name}}</a>
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
  }
  li {
    display: inline;
    padding: 0 10px;
  }
  nav {
    background-color: #B7ECFF;
  }
</style>
