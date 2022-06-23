<template>
  <div id="app">
    <b-nav card-header>
      <a class="navbar-brand mr-auto p-2" href="/">
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
    <b-row>
      <b-col sm="12" class="text-center">
        <a href="https://github.com/dweebles"><b-icon class="social-icons mr-2 mt-2" icon="github"></b-icon></a>
        <a href="https://www.linkedin.com/in/duy-nguyen-software/"><b-icon class="social-icons ml-2 mt-2" icon="linkedin"></b-icon></a>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import UserCard from "./components/usercard";

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
  /* background-color: #8bc6ec; */
  background-color: #310e68;
  background-image: linear-gradient(316deg, #310e68 0%, #5f0f40 74%);
}
html {
  height: 100%;
}

.chart__axis {
  color: #f8f8f2 !important;
  font-weight: 600;
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
  -webkit-transition: text-shadow .8s ease-out;
  -moz-transition: text-shadow .8s ease-out;
  -o-transition: text-shadow .8s ease-out;
  transition: text-shadow .8s ease-out;

}

.navbar-brand:hover {
  color: #f92672;
  text-shadow: 0px 0px 10px #000;
}

.nav-item a {
  color: #ae81ff;
  font-weight: 500;
}

.html-bracket {
  color: #f8f8f2;
}

a.router-link-active {
  color: #a6e22e;
  background-color: #856B86;
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

  -webkit-animation: typing 2s steps(8, end),
    blinking 1s step-end infinite;
  animation: typing 2s steps(10, end) infinite, blinking 1s step-end infinite;
}

.social-icons {
  position:  relative;
  top: -35px;
  width: 18px;
  height: 18px;
  color: #a6e22e;
  transition: width .3s, height .3s, color .3s;
}

.social-icons {
  position:  relative;
  top: -35px;
  width: 18px;
  height: 18px;
  color: #a6e22e;
  transition: color .3s ease;
}

.social-icons:hover {
  color: #ae81ff;
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
