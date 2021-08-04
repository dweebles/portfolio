<template>
  <div id="app">
    <b-nav card-header>
      <a class="navbar-brand mr-auto p-2" href="#">
        <span class="html-bracket">&#60;</span>DuyNguyen
        <span class="html-bracket">/&#62;</span>&nbsp;<span class="cursor"
          >&nbsp;</span
        ></a
      >
      <b-nav-item
        class="p-2 nav-links"
        to="/work"
        exact
        exact-active-class="active"
        >Projects</b-nav-item
      >
      <b-nav-item
        class="p-2 nav-links"
        to="/contact"
        exact
        exact-active-class="active"
        >Contact</b-nav-item
      >
    </b-nav>
    <UserCard />
  </div>
</template>

<script>
import UserCard from "./components/Usercard";

export default {
  name: 'App',
  components: {
    UserCard
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500&display=swap");

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 650px;
  margin: 34px auto 0px auto;
}
body {
  background-color: #8bc6ec;
  background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
}
html {
  height: 100%;
}
.nav {
  font-family: "Barlow Condensed", sans-serif;
  position: relative;
  top: 64px;
  z-index: 1;
  padding-left: 1rem;
}

.navbar-brand {
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 600;
  color: #f92672;
}
.nav-item a {
  color: #ae81ff;
  font-weight: 500;
}

.html-bracket {
  color: #f8f8f2;
}

.cursor {
  position: absolute;
  top: 13px;
  bottom: 0;
  right: 75%;
  width: 80px;
  height: 24px;
  background: #272822;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-left: 0.1em solid;

  -webkit-animation: typing 2s steps(8, end) infinite,
    blinking 1s step-end infinite;
  animation: typing 2s steps(10, end) infinite, blinking 1s step-end infinite;
}

@-webkit-keyframes typing {
  from,
  to {
    width: 140px;
  }
  25% {
    width: 0;
  }
  50% {
    width: 0;
  }
  75% {
    width: 140px;
  }
}

@keyframes typing {
  from {
    width: 140px;
  }
  to {
    width: 0;
  }
}

@-webkit-keyframes blinking {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #f8f8f0;
  }
}

@keyframes blinking {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #f8f8f0;
  }
}
</style>
