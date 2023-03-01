<template>
    <!-- Modal -->
<div class="modal fade" id="Modal" data-bs-backdrop="static" data-bs-keyboard="false">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ModalLabel"><slot name="mdTittle" /></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <slot name="mdBody" />
      </div>
      <div class="modal-footer">
        <slot name="mdButton" />
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