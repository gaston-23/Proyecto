<template lang="">
<div class="container">
  <div class="text-center pt-5" style="color: #800F2F;">
          <h1><i class="fa-solid fa-xl pt-5"></i></h1>
      </div>
          <div class="pt-5">
  <div class="form-floating mb-3">
    <input type="email" class="form-control" id="floatingInput" v-model="email">
    <label for="floatingInput">Email</label>
  </div>
  <div class="form-floating mb-3">
    <input type="password" class="form-control" id="floatingPassword" v-model="pass">
    <label for="floatingPassword">Contraseña</label>
  </div>
            <div class="text-center">
          <button @click="login" class="btn text-light mt-4" style="background-color:#800F2F">Iniciar Sesión</button>
                    <br>
          <button @click="goRegister" class="btn text-dark mt-3" style="background-color:#FFF0F3">¿No tenés cuenta? Registrarse</button>
          <!-- <router-link to="/home">Sumbit</router-link> -->
        </div>
    </div>
</div>


</template>
<script>
import axios from "axios";

export default {
  created() {
    let token = localStorage.getItem("t");
    if (token != null) {
      this.$router.push("/home");
    }
  },
  data() {
    return {
      email: "",
      pass: "",
    };
  },
  methods: {
    goRegister() {
      this.$router.push("/register");
    },
    login() {
      console.log(this.email, this.pass);
      axios
        .post("http://" + import.meta.env.VITE_API_USERS + "/users/login", {
          email: this.email,
          password: this.pass,
        })
        .then((response) => {
          console.log(response);
          let token = response.data.token;
          // Gurdamos el token de ingreso en la cache local
          localStorage.setItem("t", token);
          console.log(token);
          this.$router.push("/profile");
        })
        .catch(function (error) {
          console.log(error);
          alert("Hubo un error con sus credenciales, inténtelo de nuevo");
        });
    },
  },
};
</script>
<style lang="">
</style>