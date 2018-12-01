<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-btn slot="activator" color="secondary" dark right top fab absolute>
      <v-icon>add</v-icon>
    </v-btn>
    <v-card>
      <v-card-title>
        <span class="headline">New Collection</span>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="name" label="Name*" required></v-text-field>
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
  Name: 'CreateCollectionForm',
  data() {
    return {
      dialog: false,
      name: null,
    }
  },
  methods: {
    async save() {
      this.$emit("createCollection", {
        name: this.name
      });
      this.close();
    },
    close() {
      this.dialog = false;
    }
  },
  watch: {
    dialog(open) {
      if (!open) {
        this.name = null;
      }
    }
  }
}
</script>
