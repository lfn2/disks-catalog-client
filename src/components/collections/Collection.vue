<template>
  <div class="card" v-if="collection">
    <v-toolbar color="primary" dark>
      <v-toolbar-side-icon @click="back">
        <v-icon>arrow_back</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title>{{collection.name}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon @click="openAddDiskDialog">
        <v-icon>library_add</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <DiskCardList
              :disks="collection.disks"
              class="disk-card-list"
              :canEdit="false"
              @onDeleteDisk="removeDisk"/>
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
      addDiskDialog: false
    }
  },

  methods: {
    async getCollection() {
      this.collection = await DisksCatalogApi.getCollection(this.$route.params.id);
    },

    async addDisks(disks) {
      this.collection =
        await DisksCatalogApi.addDisksToCollection(this.collection, disks);

      this.closeAddDiskDialog();
    },

    async removeDisk(diskId) {
      let deleted =
        await DisksCatalogApi.removeDiskFromCollection(this.collection, diskId);

      if (deleted) {
        this.collection.disks = this.collection.disks.filter(disk => {
          return disk.id != diskId;
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
  margin-top: 60px;
}
</style>