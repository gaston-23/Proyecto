<template>
  <div class="fixed-bottom" style="background-color: #800f2f">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" @click="$router.push('/profile')">Perfil</a>
        <a class="navbar-brand" @click="$router.push('/home')">Home</a>
        <a class="navbar-brand" @click="$router.push('/matches')">Matches</a>
      </div>
    </nav>
  </div>
</template>

<style scoped>
</style>
