<template>
  <div class="disks container">
    <div class="disk-cards-container">
      <div class="card" v-for="disk in disks" :key="disk.id">
        <DiskCard :title='disk.title' :artist='disk.artist'/>
      </div>
    </div>
    <a href="" class="add-disk-btn btn-floating btn-large pink">
        <router-link :to="{ name: 'AddDisk' }">
          <i class="material-icons">add</i>
        </router-link>
      </a>
  </div>
</template>

<script>
import DiskCard from '@/components/DiskCard'
import db from '@/firebase/init'

export default {
  name: 'Disks',
  components: {
    DiskCard
  },
  data() {
    return {
      disks: []
    }
  },
  created() {
    db.collection('disks').get()
      .then(collection => {
        collection.forEach(document => {
          let disk = document.data()
          disk.id = document.id
          this.disks.push(disk)
        })
      })
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
.add-disk-btn {
  margin-bottom: 30px;
}
</style>
