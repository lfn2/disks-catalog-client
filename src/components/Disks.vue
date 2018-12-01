<script src="http://localhost:8098"></script>
<template>
  <div class="disks container">
    <div class="disk-cards-container">
      <div class="card" v-for="disk in disks" :key="disk.id">
        <DiskCard :title='disk.title' :artist='disk.artist'/>
      </div>
    </div>
    <AddDiskForm @newDisk="addDisk"/>
  </div>
</template>

<script>
import DiskCard from '@/components/DiskCard'
import AddDiskForm from '@/components/AddDiskForm'
import DisksCatalogApi from '@/services/DisksCatalogApi'

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
      let disks =  await DisksCatalogApi.getDisks()
      console.log(disks)
      console.log(process.env.DISKS_CATALOG_API_URL)
      disks.forEach(disk => {
        this.addDisk(disk)
      });
    },
    addDisk(disk) {
      this.disks.push(disk)
    }
  },
  created() {
    this.getDisks()
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
