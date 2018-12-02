<template>
  <div class="card" v-if="collection">
    <v-toolbar color="secondary" dark>
      <v-toolbar-side-icon @click="back">back</v-toolbar-side-icon>
      <v-toolbar-title>{{collection.name}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <DiskCardList :disks="collection.disks"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import DiskCardList from '@/components/disks/DiskCardList'
import DisksCatalogApi from '@/services/DisksCatalogApi'

export default {
  name: 'Collection',

  components: {
    DiskCardList
  },

  data() {
    return {
      collection: null
    }
  },

  methods: {
    async getCollection(id) {
      this.collection = await DisksCatalogApi.getCollection(id);
      console.log(this.collection)
    },

    back() {
      this.$router.go(-1);
    }
  },

  mounted () {
    this.getCollection(this.$route.params.id);
  }
}
</script>

<style scoped>
.card{
  max-width: 400px;
  margin: auto;
}
</style>
