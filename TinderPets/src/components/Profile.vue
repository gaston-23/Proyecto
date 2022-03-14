<template>
  <div class="text-center">
    <img
      class="mb-4 rounded"
      src="https://www.thekennelclub.org.uk/media/4981/crufts-dog-5.jpg?mode=crop&width=800&height=600&rnd=132908581180000000"
      width="200"
      height="200"
      alt=""
    />
  </div>
  <div class="form-floating mb-3">
    <input type="email" class="form-control" id="floatingInput" />
    <label for="floatingInput">Email</label>
  </div>
  <div class="form-floating mb-3">
    <input type="email" class="form-control" id="floatingInput" />
    <label for="floatingInput">Nombre completo</label>
  </div>
  <div class="form-floating mb-3">
    <input type="email" class="form-control" id="floatingInput" />
    <label for="floatingInput">Nombre mascota</label>
  </div>
    <div class="form-floating mb-3">
    <input type="email" class="form-control" id="floatingInput" />
    <label for="floatingInput">Teléfono</label>
  </div>
    <div class="form-floating mb-5">
    <input type="email" class="form-control" id="floatingInput" />
    <label for="floatingInput">Contraseña</label>
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