<template>
  <div class="fixed-bottom" style="background-color: #800f2f">
    <nav class="navbar  navbar-light d-flex justify-content-between">
      <div class="ml-2 container-fluid">
        <a class="navbar-brand" @click="$router.push('/profile')"><img src="/img/profile.png" alt="" width="35" height="30" class="d-inline-block align-text-top"></a>
        <a class="navbar-brand" @click="$router.push('/home')"><img src="/img/home.png" alt="" width="42" height="30" class="d-inline-block align-text-top"></a>
        <a class="navbar-brand" @click="$router.push('/matches')"><img src="/img/matches.png" alt="" width="40" height="35" class="d-inline-block align-text-top"></a>
      </div>
    </nav>
  </div>
</template>

<style scoped>
</style>
