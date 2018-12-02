<template>
  <v-dialog v-model="dialog" :persistent="true" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{collection.name}}</span>
      </v-card-title>
      <v-card-text v-for="disk in disks" :key="disk.id">
        <v-checkbox
          auto
          v-model="selected"
          :label="disk.title"
          :value="disk.id"
          color="secondary">
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
import { mapState } from 'vuex'

export default {
  name: 'AddDiskDialog',

  props: {
    dialog: Boolean,
    collection: Object
  },

  data() {
    return {
      selected: []
    }
  },

  computed: mapState({
    disks: state => state.disks.all
  }),

  methods: {
    close() {
      this.$emit('close');
    },

    add() {
      this.$emit('addDisks', this.selected);
    }
  }
}
</script>
