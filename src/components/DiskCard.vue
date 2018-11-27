<template>
  <div class="card">
    <v-card color="primary">
      <v-card-title>
        <h2 class="white--text">{{title}}</h2>
      </v-card-title>
      <v-card-text>
        <h4 class="white--text">{{artist}}</h4>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'DiskCard',
  props: {
    title: String,
    artist: String
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
h4 {
  font-weight: 300;
  font-size: 1.2em;
}
</style>
