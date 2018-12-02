<template>
  <div class="collections container">
    <div class="collection-cards-container">
      <div class="card" v-for="collection in collections" :key="collection.id">
        <CollectionCard
          :collection="collection"
          @onClick="openCollection"
          @deleteCollection="deleteCollection"
        />
      </div>
    </div>
    <CreateCollectionForm @createCollection='createCollection'/>
  </div>
</template>

<script>
import DisksCatalogApi from '@/services/DisksCatalogApi'
import CollectionCard from './CollectionCard'
import CreateCollectionForm from './CreateCollectionForm'
import Collection from './Collection'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Collections',

  components: {
    CollectionCard,
    CreateCollectionForm,
    Collection
  },

  computed: mapState({
    collections: state => state.collections.all,
    current: state => state.collections.current
  }),

  methods: {
    ...mapActions('collections', [
      'getAllCollections',
      'deleteCollection',
      'createCollection',
    ]),

    ...mapActions('disks', ['getAllDisks']),

    ...mapMutations('collections', ['setCurrent', 'clearCurrent']),

  	openCollection(id) {
      this.$router.push({
        name: 'Collection',
        params: {
          id: id
        }
      });
    }
  },

  mounted() {
    this.getAllCollections();
    this.getAllDisks();
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
