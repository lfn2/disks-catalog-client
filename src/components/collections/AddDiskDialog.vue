<template>
  <v-dialog v-model="dialog" :persistent="true" max-width="500px">
    <v-card height="50%">
      <v-card-title>
        <span class="headline">{{collection.name}}</span>
      </v-card-title>
      <v-card-text v-for="disk in disksToAdd" :key="disk.id">
        <v-checkbox
          auto
          contain
          v-model="selected"
          :label="`${disk.title} - ${disk.artist}`"
          :value="disk.id"
          color="secondary">
        </v-checkbox>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click="onClose">Close</v-btn>
        <v-btn color="primary" flat @click="onAdd">Add</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'

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
    disks: state => state.disks.all,
    collectionDisks: function() {
      let collectionDisks = this.collection.disks;
      if (collectionDisks == null) {
        return [];
      }

      return collectionDisks.map(disk => disk.id);
    },
    disksToAdd: function() {
      return this.disks.filter(disk => {
        return !this.collectionDisks.includes(disk.id);
      });
    }
  }),

  methods: {
    onClose() {
      this.$emit('onClose');
      this.selected = []
    },

    onAdd() {
      this.$emit('onAdd', this.selected);
      this.selected = []
    },

    ...mapActions('disks', ['getAllDisks'])
  },

  mounted () {
    this.getAllDisks();
  }
}
</script>
