<template>
  <div class="collections container">
    <div class="collection-cards-container">
      <div class="card" v-for="collection in collections" :key="collection.id">
        <CollectionCard :collection="collection" @deleteCollection="deleteCollection"/>
      </div>
    </div>
    <CreateCollectionForm @createCollection="createCollection"/>
  </div>
</template>

<script>
import DisksCatalogApi from '@/services/DisksCatalogApi'
import CollectionCard from './CollectionCard'
import CreateCollectionForm from './CreateCollectionForm'

export default {
  name: 'Collections',
  components: {
    CollectionCard,
    CreateCollectionForm
  },
  data() {
    return {
      collections: []
    }
  },
  methods: {
    async getCollections() {
      this.collections = await DisksCatalogApi.getCollections();
    },
    async createCollection(params) {
      let collection = await DisksCatalogApi.createCollection(params);

      this.collections.push(collection);
    },
    async deleteCollection(id) {
      await DisksCatalogApi.deleteCollection(id);

      this.collections = this.collections.filter(collection => {
        return collection.id != id;
      })
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
