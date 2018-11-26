<template>
  <div class="add-disk container">
    <h2 class="center-align indigo-text">Add new disk</h2>
    <form @submit.prevent="addDisk">
      <div class="field title">
        <label for="title">Title:</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div class="field name">
        <label for="title">Artist:</label>
        <input type="text" name="artist" v-model="artist">
      </div>
      <div class="field center-align">
        <button class="btn pink">Add Disk</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'AddDisk',
  data() {
    return {
      title: null,
      artist: null,
      feedback: null
    }
  },
  methods: {
    addDisk() {
      if (this.title && this.artist) {
        this.feedback = null
        db.collection('disks').add({
          title: this.title,
          artist: this.artist,
        }).then(() => {
          this.$router.push({name: 'Disks'})
        })
      } else {
        this.feedback = 'You must enter title and artist'
      }
    }
  }
}
</script>

<style scoped>
.add-disk {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.add-disk h2 {
  font-size: 2em;
  margin: 20px auto;
}
.add-disk .field {
  margin: 20px auto;
}
.field label {
  font-size: 1.2em;
}
</style>
