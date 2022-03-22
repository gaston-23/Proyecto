<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide mt-5"
    data-ride="carousel"
    data-interval="false"
  >
    <div class="carousel-inner">
      <div
        v-for="(pet, index) in pets"
        :class="'carousel-item ' + isFirst(index)"
      >
        <div class="card" style="">
          <img
            :src="pet.image"
            class="card-img-top"
            alt="..."
            height="200"
            width="200"
          />

          <div class="card-body">
            <h5 class="card-title">{{ pet.petName }}</h5>
            <p class="card-text">
              {{ pet.description }}
            </p>
            <div class="d-flex justify-content-around">
              <a
                class="btn btn-danger"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
                ><i class="fa-solid fa-circle-xmark"></i
              ></a>
              <a
                class="btn btn-success"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
                ><i class="fa-solid fa-heart"></i
              ></a>
            </div>
          </div>
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
    this.token = localStorage.getItem("t");
    if (this.token == null) {
      this.$router.push("/login");
    }
  },
  data() {
    return {
      token: "",
      pets: [
        {
          petName: "Perro facha",
          description:
            "ehh pará emoción si todavía ni termino el tinder, es el perro fachaaa",
          image:
            "https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg",
        },
        {
          petName: "Roco",
          description:
            "Un perro re buena onda, aveces te re contra muerde pero es piola el choco",
          image:
            "https://cdn.britannica.com/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg?q=60",
        },
        {
          petName: "Fatiga",
          description: "Se carga alta vagancia el choco pero es un tipazo",
          image:
            "https://www.thekennelclub.org.uk/media/4981/crufts-dog-5.jpg?mode=crop&width=800&height=600&rnd=132908581180000000",
        },
      ],
    };
  },
  methods: {
    isFirst(index) {
      if (index == 0) {
        return "active";
      } else {
        return "";
      }
    },
  },
};
</script>