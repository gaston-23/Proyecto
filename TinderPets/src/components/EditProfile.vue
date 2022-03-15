<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog text-ligh">
      <div class="modal-content">
        <div class="modal-header" style="background: #800f2f">
          <h5 class="modal-title text-light" id="staticBackdropLabel">
            Editar usuario
          </h5>
          <button
            type="button"
            class="btn-close"
            data-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" />
            <label for="floatingInput">Email</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" />
            <label for="floatingInput">Nombre</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" />
            <label for="floatingInput">Apellido</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" />
            <label for="floatingInput">Nombre mascota</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" />
            <label for="floatingInput">Teléfono</label>
          </div>
          <div class="form-floating mb-2">
            <input type="email" class="form-control" id="floatingInput" />
            <label for="floatingInput">Contraseña</label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn text-light" style="background:#800f2f">Confirmar</button>
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
    return {};
  },
};
</script>