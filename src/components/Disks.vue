<template>
  <div class="disks container">
    <div class="disk-cards-container">
      <div class="card" v-for="disk in disks" :key="disk.id">
        <DiskCard :title='disk.title' :artist='disk.artist'/>
      </div>
    </div>
    <AddDiskForm @closeForm="getDisks"/>
  </div>
</template>

<script>
import db from '@/firebase/init'
import DiskCard from '@/components/DiskCard'
import AddDiskForm from '@/components/AddDiskForm'

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
    getDisks() {
      db.collection('disks').get()
        .then(collection => {
          collection.forEach(document => {
            let disk = document.data()
            disk.id = document.id
            this.disks.push(disk)
          })
      })
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
