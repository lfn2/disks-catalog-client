<template>
  <div class="collections container">
    <div class="collection-cards-container">
      <div class="card" v-for="collection in collections" :key="collection.id">
        <CollectionCard :collection="collection"/>
      </div>
    </div>
  </div>
</template>

<script>
import DisksCatalogApi from '@/services/DisksCatalogApi'
import CollectionCard from '@/components/CollectionCard'

export default {
  name: 'Collections',
  components: {
    CollectionCard
  },
  data() {
    return {
      collections: []
    }
  },
  methods: {
    async getCollections() {
      let collections = await DisksCatalogApi.getCollections();

      collections.forEach(collection => {
        this.addCollection(collection);
      });
    },
    addCollection(collection) {
      this.collections.push(collection);
    }
  },
  created() {
    this.getCollections();
  }
}
</script>

<style scoped>
.collection-cards-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
</style>
