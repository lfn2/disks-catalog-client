<template>
  <div>
    <div class="card" v-for="disk in disks" :key="disk.id">
      <DiskCard
        :disk="disk"
        :canEdit="canEdit"
        :canDelete="canDelete"
        :canRemove="canRemove"
        @editDisk="onEditDisk"
        @deleteDisk="onDeleteDisk"
        @removeDisk="onRemoveDisk"/>
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
    disks: Array,
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

  computed: {
    hasDisks: function() {
      return this.disks.length > 0;
    }
  },

  methods: {
    onEditDisk(editedDisk) {
      this.$emit('onEditDisk', editedDisk);
    },

    onDeleteDisk(disk) {
      this.$emit('onDeleteDisk', disk);
    },

    onRemoveDisk(disk) {
      this.$emit('onRemoveDisk', disk);
    }
  }
}
</script>
