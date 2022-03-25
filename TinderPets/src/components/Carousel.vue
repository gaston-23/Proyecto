<template>
  <div class="mt-5 text-center" style="background-color: #c9184a">
    <h3 class="text-light p-2"><i class="fa-solid mx-2"></i>Explorar</h3>
  </div>
  <div
    v-if="petInfo.name != ''"
    id="carouselExampleIndicators"
    class="carousel slide mt-4"
    data-ride="carousel"
    data-interval="false"
  >
    <div class="carousel-inner">
      <div
        v-for="(pet, index) in pets"
        :key="index"
        :class="'carousel-item ' + isFirst(index)"
      >
        <div class="card" style="">
          <img
            :src="pet.image"
            class="card-img-top"
            alt="Profile"
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
                ><i @click="dislike" class="fa-solid fa-circle-xmark"></i
              ></a>
              <a
                class="btn btn-success"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
                ><i @click="like" class="fa-solid fa-heart"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-center mt-5">
    <h2 class="" style="color: #800f2f">
      ¡Ingresa una mascota en el perfil para explorar!
    </h2>
  </div>
  <div
    class="d-flex justify-content-center text-center fixed-bottom pt-5 mb-5"
    style="background-color: #c9184a"
  ></div>
  <div
    v-if="petInfo.name != ''"
    class="d-flex justify-content-center text-center fixed-bottom mb-5"
  >
    <p class="pt-5 text-light">{{ petInfo.name }}</p>
    <img
      :src="petInfo.img"
      class="rounded-circle mb-3 mx-5"
      alt="Profile"
      height="70"
      width="80"
    />
    <p class="pt-5 text-light">{{ petInfo.subkind }}</p>
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
  mounted() {
    this.token = localStorage.getItem("t");
    if (this.token == null) {
      this.$router.push("/login");
    }
    this.getUser();
  },
  data() {
    return {
      token: "",
      id: "",
      petInfo: {
        img: "",
        name: "",
        age: "",
        tags: [],
        _id: "",
        subkind: "",
      },
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
    getSuggestions() {
      console.log(          {
            age: this.petInfo.age,
            kind: this.petInfo.kind,
            subkind: this.petInfo.subkind,
            _id: this.petInfo._id,
            tags: []
          });
      axios
        .post(
          "http://" + import.meta.env.VITE_API_USERS + "/match/getSuggestion",
          {
            age: this.petInfo.age,
            kind: this.petInfo.kind,
            subkind: this.petInfo.subkind,
            _id: this.petInfo._id,
            tags: []
          },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then((response) => {
          console.log("Mascotas");
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getUser() {
      axios
        .get("http://" + import.meta.env.VITE_API_USERS + "/users/user", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((res) => {
          let data = res.data;
          this.id = data._id;
          this.getPet();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getPet() {
      axios
        .get(
          "http://" + import.meta.env.VITE_API_USERS + "/pets/all/" + this.id,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then((res) => {
          let data = res.data[0];
          if (data == null) {
            alert(
              "¡No tienes ninguna mascota creada! Ingresa una para continuar"
            );
            this.$router.push("/profile");
          }
          console.log("Info mascota");
          console.log(data);
          this.petInfo.name = data.name;
          this.petInfo.kind = data.kind;
          this.petInfo.subkind = data.subkind;
          this.petInfo.img = import.meta.env.VITE_IMAGES + data.img;
          this.petInfo._id = data._id;
          this.petInfo.age = data.age;
          this.getSuggestions();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    like(liked,user,pet) {
      
      let bodyForm = new FormData();
      let like = {
        user	: user,
			  pet	: pet,
      }
      if (liked) {
        bodyForm.append('like',like)
      }else{
        bodyForm.append('dislike',like)
      }
      

      axios
        .post(
          "http://" + import.meta.env.VITE_API_USERS + "/match/like/" ,
          {
            bodyForm,
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then((res) => {
          let data = res.data[0];
          if (data == null) {
            alert(
              "¡No tienes ninguna mascota creada! Ingresa una para continuar"
            );
            this.$router.push("/profile");
          }
          this.petInfo.name = data.name;
          this.petInfo.subkind = data.subkind;
          this.petInfo.img = import.meta.env.VITE_IMAGES + data.img;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>