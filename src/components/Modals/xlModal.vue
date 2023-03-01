<template>
    <!-- Modal -->
<div class="modal fade" id="xlModal" data-bs-backdrop="static" data-bs-keyboard="false">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="xlModalLabel"><slot name="xlTittle" /></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <slot name="xlBody" />
      </div>
      <div class="modal-footer">
        <slot name="xlButton" />
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