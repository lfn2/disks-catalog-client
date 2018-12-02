<template>
  <div>
    <div class="card" v-for="disk in disks" :key="disk.id">
      <DiskCard :disk='disk' @deleteDisk="onDeleteDisk" @editDisk="onEditDisk"/>
    </div>
  </div>
</template>

<script>
import DiskCard from './DiskCard'

export default {
  name: 'DiskCardList',

  components: {
    DiskCard
  },

  props: {
    disks: Array
  },

  methods: {
    onEditDisk(editedDisk) {
      this.$emit('onEditDisk', editedDisk);
    },

    onDeleteDisk(id) {
      this.$emit('onDeleteDisk', id);
    }
  }
}
</script>
