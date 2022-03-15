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
  <div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1"
        ><i class="fa-solid"></i></span
      >
      <input
        type="text"
        class="form-control"
        placeholder="Nombre"
        aria-label="Nombre"
        aria-describedby="basic-addon1"
      />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1"
        ><i class="fa-solid"></i></span
      >
      <input
        type="text"
        class="form-control"
        placeholder="Apellido"
        aria-label="Apellido"
        aria-describedby="basic-addon1"
      />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1"
        ><i class="fa-solid"></i></span
      >
      <input
        type="text"
        class="form-control"
        placeholder="Nombre mascota"
        aria-label="Nombre mascota"
        aria-describedby="basic-addon1"
      />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1"
        ><i class="fa-solid"></i></span
      >
      <input
        type="text"
        class="form-control"
        placeholder="Teléfono"
        aria-label="Teléfono"
        aria-describedby="basic-addon1"
      />
    </div>
  </div>

  <!-- Button trigger modal -->
  <div class="text-center">
    <button
      type="button"
      class="btn mb-5 text-light"
      style="background: #800f2f"
      data-toggle="modal"
      data-target="#staticBackdrop"
    >
      <i class="fa-solid mr-2"></i>Editar
    </button>
  </div>

  <BottomNavBar />

  <EditProfile />
</template>

<style scoped>
</style>

<script>
import BottomNavBar from "./BottomNavBar.vue";
import EditProfile from "./EditProfile.vue";

export default {
  components: { BottomNavBar, EditProfile },
  data() {
    return {};
  },
};
</script>