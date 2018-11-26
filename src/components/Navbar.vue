<template>
  <div class="navbar">
    <nav class="nav-extended indigo darken-2">
      <div class="nav-content">
        <router-link :to="{name: 'Index'}">
          <span class="nav-title">Disks Catalog</span>
        </router-link>
        <router-link :to="{name: 'Disks'}">
          <span class="nav-disks-tab">Disks</span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
  nav {
    padding: 0 20px;
  }
  .nav-disks-tab {
    margin-left: 50px;
  }
</style>
