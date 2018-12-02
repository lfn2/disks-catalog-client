<template>
  <div class="card" v-if="collection">
    <v-toolbar color="primary" dark>
      <v-toolbar-side-icon @click="back">
        <v-icon>arrow_back</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title>{{collection.name}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        hide-details
        color="white"
        append-icon="search"
        single-line
        v-model="searchText"
      ></v-text-field>
      <v-btn icon @click="openAddDiskDialog">
        <v-icon>library_add</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <DiskCardList
              :disks="disks"
              class="disk-card-list"
              :canRemove="true"
              @onRemoveDisk="removeDisk"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <AddDiskDialog
      :dialog="addDiskDialog"
      :collection="collection"
      @onClose="closeAddDiskDialog"
      @onAdd="addDisks"/>
  </div>
</template>

<script>
import DiskCardList from '@/components/disks/DiskCardList'
import AddDiskDialog from './AddDiskDialog'
import DisksCatalogApi from '@/services/DisksCatalogApi'
import { mapState, mapActions } from 'vuex'


export default {
  name: 'Collection',

  components: {
    DiskCardList,
    AddDiskDialog
  },

  data() {
    return {
      collection: null,
      addDiskDialog: false,
      searchText: "",
      disks: []
    }
  },

  methods: {
    async getCollection() {
      this.collection = await DisksCatalogApi.getCollection(this.$route.params.id);
      this.disks = this.collection.disks;
    },

    async addDisks(disks) {
      this.collection =
        await DisksCatalogApi.addDisksToCollection(this.collection, disks);

      this.closeAddDiskDialog();
    },

    async removeDisk(removedDisk) {
      let deleted =
        await DisksCatalogApi.removeDiskFromCollection(this.collection, removedDisk);

      if (deleted) {
        this.collection.disks = this.collection.disks.filter(disk => {
          return disk.id != removedDisk.id;
        })
      }
    },

    openAddDiskDialog() {
      this.addDiskDialog = true;
    },

    closeAddDiskDialog() {
      this.addDiskDialog = false;
    },

    back() {
      this.$router.go(-1);
    }
  },

  watch: {
    searchText(val) {
      this.disks = this.collection.disks.filter(disk => {
        return this.searchText.length == 0
          || disk.title.toLowerCase().includes(this.searchText.toLowerCase())
          || disk.artist.toLowerCase().includes(this.searchText.toLowerCase());
      });
    }
  },

  mounted () {
    this.getCollection();
  }
}
</script>

<style scoped>
.card{
  max-width: 700px;
  margin: auto;
}
.disk-card-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  min-height: 100px;
}
</style>
