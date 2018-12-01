<template>
  <div class="card">
    <v-card color="primary">
      <v-card-title>
        <h2 class="white--text">{{collection.name}}</h2>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'CollectionCard',
  props: {
    collection: Object
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
h2 {
  font-weight: bold;
}
</style>
