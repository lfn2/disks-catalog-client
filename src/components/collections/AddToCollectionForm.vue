<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-icon class="add-icon" slot="activator">add</v-icon>
    <v-card>
      <v-card-title>
        <span class="headline">Add to collection</span>
      </v-card-title>
      <v-card-text v-for="collection in collections" :key="collection.id">
        <v-checkbox
          v-model="selected"
          :label="collection.name"
          :value="collection.id">
        </v-checkbox>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click="close">Close</v-btn>
        <v-btn color="primary" flat @click="add">Add</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import DisksCatalogApi from '@/services/DisksCatalogApi'

export default {
  Name: 'EditDiskDialog',
  data() {
    return {
      dialog: false,
      collections: [],
      selected: []
    }
  },
  methods: {
    async add() {
      this.close();
      console.log(this.selected);
    },
    close() {
      this.dialog = false;
    }
  },
  watch: {
    async dialog(open) {
      if (open) {
        this.collections = await DisksCatalogApi.getCollections();
      }
    }
  }
}
</script>

<style scoped>
</style>
