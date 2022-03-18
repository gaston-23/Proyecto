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
    this.getUser();
  },
  data() {
    return {
      user: {
        name: "",
        surname: "",
        email: "",
        phone: "2615545156",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyMzNjYzY5YTU0ZjlmNTI2Yjg1Yzg5OSIsIm1hdGNocyI6W10sIm5hbWUiOiJKdWFubWEiLCJzdXJuYW1lIjoiRmVybmFuZGV6IiwiZW1haWwiOiJqdWFubWFudWVsZjEyQGdtYWlsLmNvbSIsImltZyI6Im51bGwiLCJwYXNzd29yZCI6IiQyYiQwNCQuS2FJMTlpcEVsaEhFQ2pqS3FxTGllSFh5aGhaUnU1b2Fud0JWLmtsZTRqVFdjS0VpRVl4NiIsIl9fdiI6MH0sImlhdCI6MTY0NzU2NTY2M30.BYbqndNtnAPczqATsxRXqTJM6cVo_OJ5XhS0w-1gOHg",
      },
    };
  },
  methods: {
    getUser() {
      axios
        .get("http://127.0.0.1:5001/users/user", {
          headers: {
            Authorization: `Bearer ${this.user.token}`,
          },
        })
        .then((res) => {
          let data = res.data;
          this.user.email = data.email;
          this.user.name = data.name;
          this.user.surname = data.surname;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    updateUser() {
      console.log(this.user.token);
      axios
        .put(
          "http://127.0.0.1:5001/users/user",
          {
            name: this.user.name,
            email: this.user.email,
            surname: this.user.surname,
            email: this.user.email,
          },
          {
            headers: {
              Authorization: `Bearer ${this.user.token}`,
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