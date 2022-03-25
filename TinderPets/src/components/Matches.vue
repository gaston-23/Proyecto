<template>
  <div class="mt-5 text-center" style="background-color: #c9184a">
    <h3 class="text-light p-2"><i class="fa-solid mx-2"></i>Parejas</h3>
  </div>
  <div v-for="match in matches" class="card mb-5 mt-5" style="max-width: 540px">
    <div class="row g-0">
      <div class="col-5">
        <img
          :src="imagesBucket + match.image"
          width="150"
          height="100"
          class="rounded-start m-0 p-0"
          alt="profile"
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
import axios from "axios";

export default {
  components: { BottomNavBar },
  computed: {
    imagesBucket() {
      return import.meta.env.VITE_IMAGES;
    },
  },
  created() {
    this.token = localStorage.getItem("t");
    if (this.token == null) {
      this.$router.push("/login");
    }
    this.getMatches();
  },
  data() {
    return {
      token: "",
      matches: [],
    };
  },
  methods: {
    getMatches() {
      axios
        .get("http://" + import.meta.env.VITE_API_USERS + "/match/match", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((res) => {
          console.log("data", res);
          res.data.map((m) => {
            console.log(m);
            this.matches.push({
              petName: m.pet_matched.name,
              image: m.pet_matched.img,
              phone: m.user.tel,
            });
          });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>