<template>
  <div class="card">
    <v-card color="primary">
      <v-card-title>
        <h2 class="white--text">{{disk.title}}</h2>
        <v-spacer></v-spacer>
        <v-menu>
          <v-btn slot="activator" dark icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile @click="openEditDialog">edit</v-list-tile>
            <v-list-tile @click="deleteDisk">delete</v-list-tile>
          </v-list>
        </v-menu>
      </v-card-title>
      <v-card-text>
        <h4 class="white--text">{{disk.artist}}</h4>
        <EditDiskForm
          :dialog="dialog"
          :disk="disk"
          @editDisk="editDisk"
          @closeEditDialog="closeEditDialog"/>
        <AddToCollectionForm class="icon-add"/>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import EditDiskForm from './EditDiskForm'
import AddToCollectionForm from './AddToCollectionForm'

export default {
  name: 'DiskCard',
  components: {
    EditDiskForm,
    AddToCollectionForm
  },
  props: {
    disk: Object
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
.icon-add {
  position: absolute;
  right: 50px;
  bottom: 12px;
}
</style>
