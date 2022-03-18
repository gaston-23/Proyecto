<template lang="">
<div class="pt-5" style="background-color:#FFF0F3; width: 18rem;">
    <div class="text-center" style="color: #800F2F;">
        <h1><i class="fa-solid fa-xl"></i></h1>
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
  <input type="password" class="form-control" id="floatingPassword3" v-model="password">
  <label for="floatingPassword3">Contraseña</label>
</div>
    </form>
          <div class="text-center">
        <button @click="register" class="btn text-light mt-4" style="background-color:#800F2F">Registrarse</button>
        <!-- <router-link to="/home">Sumbit</router-link> -->
      </div>
  </div>

</div>

</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      name: "",
      surname: "",
      password: "",
    };
  },
  methods: {
    register() {
      axios
        .post("http://127.0.0.1:5001/users/signin", {
          name: this.name,
          surname: this.surname,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          this.$router.push("/login");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<style lang="">
</style>