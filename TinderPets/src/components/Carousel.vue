<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel"
    data-interval="false"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="card" style="">
          <img
            src="https://www.thekennelclub.org.uk/media/4981/crufts-dog-5.jpg?mode=crop&width=800&height=600&rnd=132908581180000000"
            class="card-img-top"
            alt="..."
            height="200"
            width="200"
          />
          
          <div class="card-body">
            <h5 class="card-title">Fatiga</h5>
            <p class="card-text">
              Se carga alta vagancia el choco pero es un tipazo
            </p>
            <div class="d-flex justify-content-around">
              <a
                class="btn btn-danger"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
                ><i class="fa-solid fa-circle-xmark"></i></a
              >
              <a
                class="btn btn-success"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
                ><i class="fa-solid fa-heart"></i></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card" style="">
          <img
            src="https://cdn.britannica.com/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg?q=60"
            class="card-img-top"
            alt="..."
            height="200"
            width="200"
          />
          <div class="card-body">
            <h5 class="card-title">Roco</h5>
            <p class="card-text">
              Un perro re buena onda, aveces te re contra muerde pero es piola
              el choco
            </p>
            <div class="d-flex justify-content-around">
              <a
                class="btn btn-danger"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
                ><i class="fa-solid fa-circle-xmark"></i></a
              >
              <a
                class="btn btn-success"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
                ><i class="fa-solid fa-heart"></i></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card" style="">
          <img
            src="https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg"
            class="card-img-top"
            alt="..."
            height="200"
            width="200"
          />
          <div class="card-body">
            <h5 class="card-title">Perro facha</h5>
            <p class="card-text">
              ehh pará emoción si todavía ni termino el tinder, es el perro
              fachaaa
            </p>
            <div class="d-flex justify-content-around">
              <a
                class="btn btn-danger"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
                ><i class="fa-solid fa-circle-xmark"></i></a
              >
              <a
                class="btn btn-success"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
                ><i class="fa-solid fa-heart"></i></a
              >
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
  data() {
    return {};
  },
};
</script>