<template>
  <div v-for="match in matches" class="card mb-5 mt-5" style="max-width: 540px">
    <div class="row g-0">
      <div class="col-5">
        <img
          :src="match.image"
          width="150"
          height="100"
          class="rounded-start m-0 p-0"
          alt="..."
        />
      </div>
      <div class="col-7">
        <div class="card-body">
          <h5 class="card-title text-center" style="color: #800f2f">
            {{ match.petName }}
          </h5>
          <p class="card-text text-center">
            <i class="fa-brands fa-whatsapp mx-1 text-success"></i
            >{{ match.phone }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <BottomNavBar />
</template>

<style scoped>
</style>

<script>
import BottomNavBar from "./BottomNavBar.vue";

export default {
  components: { BottomNavBar },
  created() {
    if (this.token == null) {
      this.$router.push("/login");
    }
  },
  data() {
    return {
      token: "",
      matches: [
        {
          petName: "Roco",
          image:
            "https://cdn.britannica.com/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg?q=60",
          phone: "2615545156",
        },
        {
          petName: "Roco",
          image:
            "https://cdn.britannica.com/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg?q=60",
          phone: "2615545156",
        },
        {
          petName: "Roco",
          image:
            "https://cdn.britannica.com/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg?q=60",
          phone: "2615545156",
        },
        {
          petName: "Roco",
          image:
            "https://cdn.britannica.com/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg?q=60",
          phone: "2615545156",
        },
        {
          petName: "Roco",
          image:
            "https://cdn.britannica.com/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg?q=60",
          phone: "2615545156",
        },
        {
          petName: "Roco",
          image:
            "https://cdn.britannica.com/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg?q=60",
          phone: "2615545156",
        },
        {
          petName: "Roco",
          image:
            "https://cdn.britannica.com/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg?q=60",
          phone: "2615545156",
        },
      ],
    };
  },
};
</script>