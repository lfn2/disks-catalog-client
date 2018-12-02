<template>
  <div class="card">
    <v-card color="primary">
      <v-card-title>
        <h2 class="white--text">{{disk.title}}</h2>
        <v-spacer></v-spacer>
        <v-menu v-if="showMenu" nudge-right="18">
          <v-btn slot="activator" dark icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-if="canEdit" @click="openEditDialog">edit</v-list-tile>
            <v-list-tile v-if="canDelete" @click="deleteDisk">delete</v-list-tile>
            <v-list-tile v-if="canRemove" @click="removeDisk">remove</v-list-tile>
          </v-list>
        </v-menu>
      </v-card-title>
      <v-card-text>
        <h4 class="white--text">{{disk.artist}}</h4>
        <EditDiskDialog
          :dialog="dialog"
          :disk="disk"
          @editDisk="editDisk"
          @closeEditDialog="closeEditDialog"/>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import EditDiskDialog from './EditDiskDialog'

export default {
  name: 'DiskCard',
  components: {
    EditDiskDialog,
  },

  props: {
    disk: Object,
    canEdit: {
      type: Boolean,
      default: false
    },
    canDelete: {
      type: Boolean,
      default: false
    },
    canRemove: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      dialog: false
    }
  },

  computed: {
    showMenu: function() {
      return this.canEdit || this.canDelete || this.canRemove;
    }
  },

  methods: {
    deleteDisk() {
      this.$emit("deleteDisk", this.disk);
    },

    async editDisk(disk) {
      this.$emit("editDisk", disk);
    },

    async removeDisk() {
      this.$emit('removeDisk', this.disk);
    },

    openEditDialog() {
      this.dialog = true;
    },

    closeEditDialog() {
      this.dialog = false;
    }
  }
}
</script>

<style scoped>
h2 {
  font-weight: bold;
}
h4 {
  font-weight: 300;
  font-size: 1.2em;
}
</style>
