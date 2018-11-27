<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-btn slot="activator" color="secondary" dark right fab absolute>
      <v-icon>add</v-icon>
    </v-btn>
    <v-card>
      <v-card-title>
        <span class="headline">New Disk</span>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="title" label="Title*" required></v-text-field>
        <v-text-field v-model="artist" label="Artist*" required></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click="close">Close</v-btn>
        <v-btn color="primary" flat @click="save">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import db from '@/firebase/init'

export default {
  Name: 'AddDiskForm',
  data() {
    return {
      dialog: false,
      title: null,
      artist: null
    }
  },
  methods: {
    save() {
      db.collection('disks').add({
        title: this.title,
        artist: this.artist,
      }).then(() => {
        this.close()
        this.$route.go()
      })
    },
    close() {
      this.dialog = false
    }
  }
}
</script>
