<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="petModal"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    aria-labelledby="petModal"
    aria-hidden="true"
  >
    <div class="modal-dialog text-ligh">
      <div class="modal-content">
        <div class="modal-header" style="background: #800f2f">
          <h5 class="modal-title text-light" id="petModal">Editar mascota</h5>
          <button
            type="button"
            class="btn-close"
            data-dismiss="modal"
            aria-label="Cerrar"
          ></button>
        </div>
        <div class="modal-body">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" v-model="pet.name"/>
            <label for="floatingInput">Nombre mascota</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" v-model="pet.age"/>
            <label for="floatingInput">Edad</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" v-model="pet.kind"/>
            <label for="floatingInput">Especie</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" v-model="pet.subkind"/>
            <label for="floatingInput">Raza</label>
          </div>
          <div class="input-group mb-2">
            <textarea
              type="text"
              class="form-control"
              rows="3"
              placeholder="Descripción"
              aria-label="Descripción"
              aria-describedby="basic-addon1"
              :value="pet.description"
            />
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Cerrar
          </button>
          <button
            type="button"
            class="btn text-light"
            style="background: #800f2f"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  data() {
    return {
      pet: {
        name: "Roco",
        age: "6",
        img: "",
        kind: "Perro",
        subkind: "Pichichu",
        description: "Buenaso este perro, seguro se lleva bien con tu perra"
      }
    };
  },
  metthods: {
    getPetInfo(){
      // Pegada al backend
    }
  }
};
</script>