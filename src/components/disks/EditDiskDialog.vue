<template>
  <v-dialog v-model="dialog" :persistent="true" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">Edit Disk</span>
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
  Name: 'EditDiskDialog',
  props: {
    disk: Object,
    dialog: Boolean
  },
  data() {
    return {
      title: this.disk.title,
      artist: this.disk.artist
    }
  },
  methods: {
    async save() {
      this.close();
      this.$emit("editDisk", {
        id: this.disk.id,
        title: this.title,
        artist: this.artist
      });
    },
    close() {
      this.$emit('closeEditDialog');
    }
  }
}
</script>

<style scoped>
</style>
