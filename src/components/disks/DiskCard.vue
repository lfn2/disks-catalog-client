<template>
  <div class="card">
    <v-card color="primary">
      <v-card-title>
        <h2 class="white--text">{{disk.title}}</h2>
        <v-icon class="icon-delete" @click="deleteDisk">delete</v-icon>
      </v-card-title>
      <v-card-text>
        <h4 class="white--text">{{disk.artist}}</h4>
        <EditDiskForm class="icon-edit" :disk="disk" @editDisk="editDisk"/>
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
    }
  },
  methods: {
    deleteDisk() {
      this.$emit("deleteDisk", this.disk.id);
    },
    async editDisk(disk) {
      this.$emit("editDisk", disk);
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
.icon-delete {
  position: absolute;
  right: 15px;
}
.icon-edit {
  position: absolute;
  right: 15px;
  bottom: 12px;
}
.icon-add {
  position: absolute;
  right: 50px;
  bottom: 12px;
}
</style>
