<template>
  <b-nav card-header tabs>
    <!-- <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item> -->
    <b-nav-item to="/some/route/" exact exact-active-class="active">Projects</b-nav-item>
    <b-nav-item to="/some/route/foo" exact exact-active-class="active">Contact</b-nav-item>
  </b-nav>
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
    background-position: 0 -4.2em;
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
