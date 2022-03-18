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
    this.getUser();
    this.petName? this.create = false : this.create = true;
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
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyMzNjYzY5YTU0ZjlmNTI2Yjg1Yzg5OSIsIm1hdGNocyI6W10sIm5hbWUiOiJKdWFubWEiLCJzdXJuYW1lIjoiRmVybmFuZGV6IiwiZW1haWwiOiJqdWFubWFudWVsZjEyQGdtYWlsLmNvbSIsImltZyI6Im51bGwiLCJwYXNzd29yZCI6IiQyYiQwNCQuS2FJMTlpcEVsaEhFQ2pqS3FxTGllSFh5aGhaUnU1b2Fud0JWLmtsZTRqVFdjS0VpRVl4NiIsIl9fdiI6MH0sImlhdCI6MTY0NzU2NTY2M30.BYbqndNtnAPczqATsxRXqTJM6cVo_OJ5XhS0w-1gOHg",
    };
  },
  methods: {
    getUser() {
      axios
        .get("http://127.0.0.1:5001/users/user", {
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
      console.log(this.id);
      axios
        .get("http://127.0.0.1:5001/pets/all/" + this.id, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((res) => {
          let data = res.data;
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>