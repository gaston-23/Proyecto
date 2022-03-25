<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog text-ligh">
      <div class="modal-content">
        <div class="modal-header" style="background: #800f2f">
          <h5 class="modal-title text-light" id="staticBackdropLabel">
            Editar usuario
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
              v-model="user.name"
            />
            <label for="floatingInput">Nombre</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              v-model="user.surname"
            />
            <label for="floatingInput">Apellido</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              v-model="user.phone"
            />
            <label for="floatingInput">Teléfono</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              v-model="user.email"
            />
            <label for="floatingInput">Email</label>
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
            @click="updateUser"
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
  created() {
    this.user.token = localStorage.getItem("t");
    this.getUser();
  },
  data() {
    return {
      user: {
        name: "",
        surname: "",
        email: "",
        phone: "",
        token: "",
      },
    };
  },
  methods: {
    getUser() {
      axios
        .get("http://" + import.meta.env.VITE_API_USERS + "/users/user", {
          headers: {
            Authorization: `Bearer ${this.user.token}`,
          },
        })
        .then((res) => {
          let data = res.data;
          this.user.email = data.email;
          this.user.name = data.name;
          this.user.surname = data.surname;
          this.user.phone = data.tel;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    updateUser() {
      console.log(this.user.token);
      axios
        .put(
          "http://" + import.meta.env.VITE_API_USERS + "/users/user",
          {
            name: this.user.name,
            email: this.user.email,
            surname: this.user.surname,
            email: this.user.email,
            tel: this.user.phone,
          },
          {
            headers: {
              Authorization: `Bearer ${this.user.token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>