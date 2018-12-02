<template>
  <div class="disks container">
    <div class="disk-cards-container">
      <div class="card" v-for="disk in disks" :key="disk.id">
        <DiskCard :disk='disk' @deleteDisk="deleteDisk" @editDisk="editDisk"/>
      </div>
    </div>
    <CreateDiskForm @createDisk="createDisk"/>
  </div>
</template>

<script>
import DiskCard from './DiskCard'
import CreateDiskForm from './CreateDiskForm'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Disks',

  components: {
    DiskCard,
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

  created() {
    this.getAllDisks();
  }
}
</script>

<style scoped>
.disk-cards-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
</style>
