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
import DisksCatalogApi from '@/services/DisksCatalogApi'
import Vue from 'vue'
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
  methods: {
    async getDisks() {
      this.$store.dispatch('disks/getAll');
    },
    async createDisk(params) {
      let disk = await DisksCatalogApi.createDisk(params);

      this.addDisk(disk);
    },
    async deleteDisk(id) {
      await DisksCatalogApi.deleteDisk(id);

      this.disks = this.disks.filter(disk => {
        return disk.id != id;
      })
    },
    async editDisk(disk) {
      let editedDisk = await DisksCatalogApi.editDisk(disk);
      let diskIndex = this.disks.findIndex(disk => disk.id === editedDisk.id);

      Vue.set(this.disks, diskIndex, editedDisk);
    },
    addDisk(disk) {
      this.disks.push(disk);
    }
  },
  created() {
    this.getDisks();
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
