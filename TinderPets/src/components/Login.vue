<template lang="">
<div class="pt-5" style="background-color:#FFF0F3; width: 18rem;">
  <div class="pt-5 pl-3">
    <form>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput">
  <label for="floatingInput">Email</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" >
  <label for="floatingPassword">Contraseña</label>
</div>
      <div class="text-center">
        <button @click="$router.push('/home')" type="submit" class="btn text-light mt-4" style="background-color:#A4133C">Iniciar Sesión</button>
        <!-- <router-link to="/home">Sumbit</router-link> -->
      </div>
    </form>
  </div>

</div>

</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="">
</style>