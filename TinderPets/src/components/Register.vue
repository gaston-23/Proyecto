<template lang="">
<div class="container-fluid">
        <div class="text-center pt-5" style="color: #800F2F;">
          <h1><i class="fa-solid fa-xl pt-5"></i></h1>
      </div>
          <div class="pt-5 pl-3">
      <form>
          <div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput" v-model="name">
    <label for="floatingInput">Nombre</label>
  </div>
  <div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput1" v-model="surname">
    <label for="floatingInput1">Apellido</label>
  </div>
  <div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput2" v-model="email">
    <label for="floatingInput2">Email</label>
  </div>
  <div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput2" v-model="phone">
    <label for="floatingInput2">Teléfono</label>
  </div>
  <div class="form-floating mb-3">
    <input type="password" class="form-control" id="floatingPassword3" v-model="password">
    <label for="floatingPassword3">Contraseña</label>
  </div>
      </form>
            <div class="text-center">
          <button @click="register" class="btn text-light mt-4" style="background-color:#800F2F">Registrarse</button>
          <br>
          <button @click="goLogin" class="btn text-dark mt-3" style="background-color:#FFF0F3">¿Ya tenés cuenta? Iniciá sesión</button>
          <!-- <router-link to="/home">Sumbit</router-link> -->
        </div>
    </div>
</div>


</template>
<script>
import axios from "axios";

export default {
  created() {
    this.checkLogin();
  },
  data() {
    return {
      email: "",
      name: "",
      surname: "",
      password: "",
      phone: "",
    };
  },
  methods: {
    checkLogin() {
      let token = localStorage.getItem("t");
      if (token != null) {
        this.$router.push("/home");
      }
    },
    goLogin() {
      this.$router.push("/login");
    },
    register() {
      axios
        .post("http://" + import.meta.env.VITE_API_USERS + "/users/signin", {
          name: this.name,
          surname: this.surname,
          email: this.email,
          password: this.password,
          tel: this.phone,
        })
        .then((response) => {
          console.log(response);
          this.$router.push("/login");
        })
        .catch(function (error) {
          console.log(error);
          alert("Debe completar todos los campos");
        });
    },
  },
};
</script>
<style lang="">
</style>