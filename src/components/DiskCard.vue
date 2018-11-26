<template>
  <div class="card-content">
    <h2 class="indigo-text">{{title}}</h2>
    <h4 class="indigo-text">{{artist}}</h4>
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
}
</style>
