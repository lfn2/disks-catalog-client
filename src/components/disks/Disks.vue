<template>
  <div class="disks container">
    <DiskCardList class="disk-card-list" :disks="disks" @onDeleteDisk="deleteDisk" @onEditDisk="editDisk"/>
    <CreateDiskForm @createDisk="createDisk"/>
  </div>
</template>

<script>
import DiskCardList from './DiskCardList'
import CreateDiskForm from './CreateDiskForm'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Disks',

  components: {
    DiskCardList,
    CreateDiskForm
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
