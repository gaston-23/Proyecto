<template lang="">
<div class="pt-5" style="background-color:#FFF0F3; width: 18rem;">
    <div class="text-center" style="color: #800F2F;">
        <h1><i class="fa-solid fa-xl"></i></h1>
    </div>
  <div class="pt-5 pl-3">
    <form>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" v-model="email">
  <label for="floatingInput">Email</label>
</div>
<div class="form-floating mb-3">
  <input type="password" class="form-control" id="floatingPassword" v-model="pass">
  <label for="floatingPassword">Contraseña</label>
</div>
      <div class="text-center">
        <button @click="login" type="submit" class="btn text-light mt-4" style="background-color:#800F2F">Ingresar</button>
        <!-- <router-link to="/home">Sumbit</router-link> -->
      </div>
    </form>
  </div>

</div>

</template>
<script>
export default {
  data() {
    return {
      email: "",
      pass: "",
    };
  },
  methods: {
    login() {
      if (this.email == "hola" && this.pass == "hola") {
        this.$router.push("/home");
      }else{
        alert("Contraseña incorrecta");
      }
    },
  },
};
</script>
<style lang="">
</style>