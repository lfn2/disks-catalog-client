<template>
  <div class="card">
    <v-hover>
      <v-card
        slot-scope="{hover}"
        :class="`elevation-${hover ? 12 : 2}`"
        class="mx-auto clickable"
        color="primary"
        @click="onClick"
      >
        <v-card-title>
          <h2 class="white--text">{{collection.name}}</h2>
          <v-spacer></v-spacer>
          <v-menu right :nudge-right="18" @click.native.stop>
            <v-btn slot="activator" dark icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile
                @click="deleteCollection"
              >
                <v-list-tile-title>delete</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-card-title>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
import AddDiskDialog from './AddDiskDialog'

export default {
  name: 'CollectionCard',

  components: {
    AddDiskDialog
  },

  props: {
    collection: Object
  },

  data() {
    return {
      addDiskDialog: false
    }
  },

  methods: {
    openAddDiskDialog() {
      this.addDiskDialog = true;
    },

    closeAddDiskDialog() {
      this.addDiskDialog = false;
    },

    deleteCollection() {
      this.$emit('deleteCollection', this.collection.id);
    },

    onClick() {
      this.$emit('onClick', this.collection.id);
    }
  }
}
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
.btn-menu {
  z-index: 1000;
}
h2 {
  font-weight: bold;
}
</style>
