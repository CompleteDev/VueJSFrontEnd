<template>
<!-- Modal -->
<div class="modal fade" id="fullScreenModal" data-bs-backdrop="static" data-bs-keyboard="false">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel"><slot name="fsTittle" /></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <slot name="fsBody" />
      </div>
      <div class="modal-footer">
          <slot name="fsButton" />
      </div>
    </div>
  </div>
</div>
</template>

<script>


export default {

};

</script>

<style lang="scss" scoped>

</style>

