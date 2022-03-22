<template>
  <div class="container">
    <!-- Barra de navegación general a toda la app -->
    <div class="fixed-top">
      <nav class="navbar navbar-light row" style="background-color: #800f2f">
        <div class="row d-flex">
          <div class="col-10">
            <a class="navbar-brand text-light" href="#">
              <img
                src="/img/dog-icon-12.png"
                alt=""
                width="30"
                height="24"
                class="d-inline-block align-text-top mx-2"
              />
              Tinder Pets
            </a>
          </div>
          <div class="d-flex col-2 mt-1">
            <a
              class="btn text-right ml-4"
              role="button"
              aria-controls="offcanvas"
              @click="logout"
            >
              <i class="fa-solid text-light text-right"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
    <router-view class="" v-slot="{ Component }">
      <transition>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>


<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>

<script>
import Login from "./components/Login.vue";
import Carousel from "./components/Carousel.vue";
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      localStorage.removeItem("t");
      this.$router.push("/login");
    },
  },
};
</script>