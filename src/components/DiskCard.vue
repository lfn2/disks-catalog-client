<template>
  <div class="card">
    <v-card color="primary">
      <v-card-title>
        <v-icon class="icon-delete" @click="deleteDisk">delete</v-icon>
        <h2 class="white--text">{{disk.title}}</h2>
      </v-card-title>
      <v-card-text>
        <h4 class="white--text">{{disk.artist}}</h4>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'DiskCard',
  props: {
    disk: Object
  },
  data() {
    return {
    }
  },
  methods: {
    deleteDisk() {
      this.$emit("deleteDisk", this.disk.id)
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
</style>
