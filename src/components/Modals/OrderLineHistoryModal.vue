<template>
    <!-- Modal -->
<div class="modal fade" id="OrderLineHistoryModal" data-bs-backdrop="static" data-bs-keyboard="false">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="largeModalLabel"><slot name="lgTittle" /></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <slot name="lgBody" />
      </div>
      <div class="modal-footer">
        <slot name="lgButton" />
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