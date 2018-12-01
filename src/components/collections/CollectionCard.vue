<template>
  <div class="card">
    <v-hover>
      <v-card
        slot-scope="{hover}"
        :class="`elevation-${hover ? 12 : 2}`"
        class="mx-auto"
        color="primary"
      >
        <v-card-title>
          <h2 class="white--text">{{collection.name}}</h2>
        </v-card-title>
      </v-card>
    </v-hover>
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
