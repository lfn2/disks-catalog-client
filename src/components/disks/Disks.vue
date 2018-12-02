<template>
  <div class="disks container">
    <DiskCardList class="disk-card-list"
      :disks="disks"
      :canEdit="true"
      :canDelete="true"
      @onDeleteDisk="deleteDisk"
      @onEditDisk="editDisk"/>
    <CreateDiskDialog @createDisk="createDisk"/>
  </div>
</template>

<script>
import DiskCardList from './DiskCardList'
import CreateDiskDialog from './CreateDiskDialog'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Disks',

  components: {
    DiskCardList,
    CreateDiskDialog
  },

  computed: mapState({
    disks: state => state.disks.all
  }),

  methods: mapActions('disks', [
    'getAllDisks',
    'createDisk',
    'deleteDisk',
    'editDisk'
  ]),

  mounted() {
    this.getAllDisks();
  }
}
</script>

<style scoped>
.disk-card-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
</style>
