<template>
  <div class="mt-5 text-center" style="background-color: #c9184a">
    <h3 class="text-light p-2"><i class="fa-solid mx-2"></i>Perfil</h3>
  </div>
  <div class="text-center mt-4">
    <img
      class="mb-4 rounded"
      :src="petImg"
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
        placeholder="Nombre"
        aria-label="Nombre"
        aria-describedby="basic-addon1"
        v-model="name"
        disabled
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
        v-model="lastname"
        disabled
      />
    </div>
    <div class="input-group mb-3" v-if="this.petName">
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
        v-model="petName"
        disabled
      />
    </div>
    <div class="text-center" v-else>
      <button
        type="button"
        class="btn mb-3 text-light col-12"
        style="background: #800f2f"
        data-toggle="modal"
        data-target="#petModal"
      >
        <i class="fa-solid mr-2">+</i>Ingresar mascota
      </button>
    </div>
    <div class="input-group mb-3">
      <textarea
        type="text"
        class="form-control"
        rows="3"
        placeholder="Descripción"
        aria-label="Descripción"
        aria-describedby="basic-addon1"
        disabled
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
      @click="create = true"
    >
      <i class="fa-solid mr-2"></i>Editar
    </button>
    <button
      type="button"
      class="btn mb-5 text-light mx-2"
      style="background: #800f2f"
      data-toggle="modal"
      data-target="#petModal"
      v-if="petName"
      @click="create = false"
    >
      <i class="fa-solid mr-2"></i>Editar Mascota
    </button>
  </div>

  <BottomNavBar />

  <EditProfile />

  <EditPet :create="create"/>
</template>

<style scoped>
</style>

<script>
import BottomNavBar from "./BottomNavBar.vue";
import EditProfile from "./EditProfile.vue";
import EditPet from "./EditPet.vue";
import axios from "axios";

export default {
  components: { BottomNavBar, EditProfile, EditPet },
  created() {
    this.token = localStorage.getItem("t");
    if (this.token == null) {
      this.$router.push("/login");
    }
    this.getUser();
    this.petName ? (this.create = false) : (this.create = true);
  },
  data() {
    return {
      id: "",
      name: "",
      lastname: "",
      petName: "",
      description: "",
      // Esta propiedad indica si estamos creando una mascota o no
      create: true,
      token: "",
    };
  },
  methods: {
    getUser() {
      axios
        .get("http://" + import.meta.env.VITE_API_USERS + "/users/user", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((res) => {
          let data = res.data;
          console.log(data);
          this.email = data.email;
          this.name = data.name;
          this.lastname = data.surname;
          this.id = data._id;
          this.getPet();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getPet() {
      axios
        .get(
          "http://" + import.meta.env.VITE_API_USERS + "/pets/all/" + this.id,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then((res) => {
          let data = res.data[0];
          this.petName = data.name;
          this.petImg = import.meta.env.VITE_IMAGES+data.img;
          console.log("images",this.petImg);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>