<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-btn slot="activator" color="secondary" dark right top fab absolute>
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
export default {
  Name: 'CreateDiskForm',
  data() {
    return {
      dialog: false,
      title: null,
      artist: null
    }
  },
  methods: {
    async save() {
      this.close();
      this.$emit("createDisk", {
        title: this.title,
        artist: this.artist
      });
    },
    close() {
      this.dialog = false;
    }
  },
  watch: {
    dialog(val) {
      if (!val) {
        this.title = null;
        this.artist = null;
      }
    }
  }
}
</script>
