<template>
  <div class="index container">
    <div class="card" v-for="disk in disks" :key="disk.id">
      <div class="card-content">
        <h2 class="indigo-text">{{disk.title}}</h2>
        <h4 class="indigo-text">{{disk.artist}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'Disks',
  data() {
    return {
      disks: []
    }
  },
  created() {
    console.log('Hello')
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
