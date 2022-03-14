<template>
  <div class="text-center">
    <img
      class="mb-4"
      src="https://www.thekennelclub.org.uk/media/4981/crufts-dog-5.jpg?mode=crop&width=800&height=600&rnd=132908581180000000"
      width="250"
      height="250"
      alt=""
    />
  </div>
  <div class="form-floating mb-3">
    <input
      type="email"
      class="form-control"
      id="floatingInput"
      placeholder="name@example.com"
    />
    <label for="floatingInput">Email address</label>
  </div>
  <div class="form-floating">
    <input
      type="password"
      class="form-control"
      id="floatingPassword"
      placeholder="Password"
    />
    <label for="floatingPassword">Password</label>
  </div>

  <BottomNavBar />
</template>

<style scoped>
</style>

<script>
import BottomNavBar from "./BottomNavBar.vue";

export default {
  components: { BottomNavBar },
  data() {
    return {};
  },
};
</script>