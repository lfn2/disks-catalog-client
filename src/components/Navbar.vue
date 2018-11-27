<template>
  <div class="navbar">
    <v-toolbar color="primary" dark tabs>
      <v-toolbar-title class="navbar-title">Disks Catalog</v-toolbar-title>
      <v-tabs
        slot="extension"
        color="primary"
        centered
        fixed-tabs
      >
        <v-tabs-slider color="accent"></v-tabs-slider>

        <v-tab :to="{name: 'Disks'}">Disks</v-tab>
      </v-tabs>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
