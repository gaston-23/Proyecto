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
      <span
        class="input-group-text"
        style="background-color: #800f2f"
        id="basic-addon1"
        ><i class="fa-solid text-light"></i></span
      >
      <input
        type="text"
        class="form-control"
        placeholder="Nombre dueño"
        aria-label="Nombre dueño"
        aria-describedby="basic-addon1"
      />
    </div>
    <div class="input-group mb-3">
      <span
        class="input-group-text"
        style="background-color: #800f2f"
        id="basic-addon1"
        ><i class="fa-solid text-light"></i></span
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
      <span
        class="input-group-text"
        style="background-color: #800f2f"
        id="basic-addon1"
        ><i class="fa-solid text-light"></i></span
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
      <textarea
        type="text"
        class="form-control"
        rows="3"
        placeholder="Descripción"
        aria-label="Descripción"
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
    <button
      type="button"
      class="btn mb-5 text-light mx-2"
      style="background: #800f2f"
      data-toggle="modal"
      data-target="#petModal"
    >
      <i class="fa-solid mr-2"></i>Editar Mascota
    </button>
  </div>

  <BottomNavBar />

  <EditProfile />

  <EditPet />
</template>

<style scoped>
</style>

<script>
import BottomNavBar from "./BottomNavBar.vue";
import EditProfile from "./EditProfile.vue";
import EditPet from "./EditPet.vue";

export default {
  components: { BottomNavBar, EditProfile, EditPet },
  data() {
    return {};
  },
};
</script>