<template>
  <div class="card">
    <v-card color="primary">
      <v-card-title>
        <h2 class="white--text">{{disk.title}}</h2>
        <v-spacer></v-spacer>
        <v-menu v-if="canEdit || canDelete" nudge-right="18">
          <v-btn slot="activator" dark icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-if="canEdit" @click="openEditDialog">edit</v-list-tile>
            <v-list-tile v-if="canDelete" @click="deleteDisk">delete</v-list-tile>
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
      default: true
    },
    canDelete: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    deleteDisk() {
      this.$emit("deleteDisk", this.disk.id);
    },

    async editDisk(disk) {
      this.$emit("editDisk", disk);
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
