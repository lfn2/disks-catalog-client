<template>
  <div class="disks container">
    <div class="disk-cards-container">
      <div class="card" v-for="disk in disks" :key="disk.id">
        <DiskCard :disk='disk' @deleteDisk="deleteDisk" @editDisk="editDisk"/>
      </div>
    </div>
    <AddDiskForm @newDisk="addDisk"/>
  </div>
</template>

<script>
import DiskCard from './DiskCard'
import AddDiskForm from './AddDiskForm'
import DisksCatalogApi from '@/services/DisksCatalogApi'
import Vue from 'vue'

export default {
  name: 'Disks',
  components: {
    DiskCard,
    AddDiskForm
  },
  data() {
    return {
      disks: []
    }
  },
  methods: {
    async getDisks() {
      let disks =  await DisksCatalogApi.getDisks();

      disks.forEach(disk => {
        this.addDisk(disk);
      });
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
