<template>
  <div class="fixed-bottom" style="background-color: #800f2f">
    <nav class="navbar navbar-light d-flex justify-content-between">
      <div class="mx-3 container-fluid">
        <!-- Se usan los glyphs porque si no, no funciona -->
        <a class="navbar-brand ml-2" @click="$router.push('/profile')"><i class="fa-solid text-light"></i></a>
        <a class="navbar-brand pr-2" @click="$router.push('/home')"><i class="fa-solid text-light"></i></a>
        <a class="navbar-brand" @click="$router.push('/matches')"><i class="fa-solid fa-comment text-light "></i></a>
      </div>
    </nav>
  </div>
</template>

<style scoped>
</style>
