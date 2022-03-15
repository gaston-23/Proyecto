<template lang="">
<div class="pt-5" style="background-color:#FFF0F3; width: 18rem;">
    <div class="text-center" style="color: #800F2F;">
        <h1><i class="fa-solid fa-xl"></i></h1>
    </div>
  <div class="pt-5 pl-3">
    <form>
        <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput">
  <label for="floatingInput">Nombre</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput1">
  <label for="floatingInput1">Apellido</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput2">
  <label for="floatingInput2">Email</label>
</div>
<div class="form-floating mb-3">
  <input type="password" class="form-control" id="floatingPassword3" >
  <label for="floatingPassword3">Contraseña</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword4" >
  <label for="floatingPassword4">Confirmar contraseña</label>
</div>
      <div class="text-center">
        <button @click="$router.push('/home')" type="submit" class="btn text-light mt-4" style="background-color:#800F2F">Registrarse</button>
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
        
    };
  },
};
</script>
<style lang="">
</style>