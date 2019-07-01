<template>
  <div class="modal modal-search" id="searchModal">
    <div class="modal-dialog">
      <div class="modal-content bg-transparent border-0">
        <button type="button" class="close close-search text-color--primary text-color--white text-size-3" data-dismiss="modal">&times;</button>
        <!-- Modal body -->
        <div class="modal-body">
          <form action="#">
            <div class="form-group has-search">
              <icon icon="search" class="form-control-feedback" />
              <input type="text" class="form-control" placeholder="Search">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.close-search {
    font-size: 3.5rem;
    position: absolute;
    right: -22px;
    margin-left: 18rem;
}
</style>
