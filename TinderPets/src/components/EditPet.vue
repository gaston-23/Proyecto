<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="petModal"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    aria-labelledby="petModal"
    aria-hidden="true"
  >
    <div class="modal-dialog text-ligh">
      <div class="modal-content">
        <div class="modal-header" style="background: #800f2f">
          <h5 class="modal-title text-light" id="petModal">
            {{ this.create ? "Crear mascota" : "Editar mascota" }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-dismiss="modal"
            aria-label="Cerrar"
          ></button>
        </div>
        <div class="modal-body">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              v-model="pet.name"
            />
            <label for="floatingInput">Nombre mascota</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              v-model="pet.age"
            />
            <label for="floatingInput">Edad</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              v-model="pet.kind"
            />
            <label for="floatingInput">Especie</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              v-model="pet.subkind"
            />
            <label for="floatingInput">Raza</label>
          </div>
          <div class="input-group mb-2">
            <textarea
              type="text"
              class="form-control"
              rows="3"
              placeholder="Descripción"
              aria-label="Descripción"
              aria-describedby="basic-addon1"
              :value="pet.description"
            />
          </div>
          <div class="mb-3 text-center">
            <label for="file" class="form-label">Foto de mascota</label>
            <input class="file" type="file" id="file" />
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Cerrar
          </button>
          <button
            type="button"
            class="btn text-light"
            style="background: #800f2f"
            @click="this.create ? this.createPet() : this.updatePetInfo"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import axios from "axios";

export default {
  props: ["create"],
  created() {
    this.token = localStorage.getItem("t");
    console.log(this.token);
  },
  data() {
    return {
      pet: {
        user_id: "",
        name: "Roco",
        age: "6",
        img: "",
        kind: "Perro",
        subkind: "Pichichu",
        description: "Buenaso este perro, seguro se lleva bien con tu perra",
        token: "",
      },
      token: "",
    };
  },
  methods: {
    createPet() {
      let formData = new FormData();
      let imageFile = document.querySelector("#file");
      formData.append("name", this.pet.name);
      formData.append("age", this.pet.age);
      formData.append("subkind", this.pet.subkind);
      formData.append("tags", ["perro"]);
      formData.append("profile", imageFile.files[0]);
      console.log(formData);
      axios
        .post("http://"+import.meta.env.VITE_API_USERS +"/pets/add", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getPetInfo() {
      axios
        .get("http://"+import.meta.env.VITE_API_USERS +"/users/user", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((res) => {
          let data = res.data;
          this.user_id = data._id;
        })
        .catch((error) => {
          console.error(error);
        });
      axios
        .get("http://"+import.meta.env.VITE_API_USERS +"/pets/single/" + this.user_id, {
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
    updatePetInfo() {
      axios
        .put(
          "http://"+import.meta.env.VITE_API_USERS +"5001/pets/add",
          {
            name: this.pet.name,
            age: this.pet.age,
            subkind: this.pet.subkind,
          },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>