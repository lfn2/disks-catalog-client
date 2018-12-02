import axios from 'axios'

export default {
  async getAllDisks() {
    let response = await axios.get('/disks');
    return response.data;
  },

  async createDisk(params) {
    let disk = await axios.post('/disks', params);
    return disk.data;
  },

  async deleteDisk(id) {
    return await axios.delete(`/disks/${id}`);
  },

  async editDisk(disk) {
    let editedDisk = await axios.patch(`/disks/${disk.id}`, disk);
    return editedDisk.data;
  },

  async getAllCollections() {
    let collections = await axios.get('/collections');
    return collections.data;
  },

  async createCollection(params) {
    console.log(params);
    let collection = await axios.post('/collections', params);
    return collection.data;
  },

  async deleteCollection(id) {
    return await axios.delete(`/collections/${id}`);
  },

  async getCollection(id) {
    let collection = await axios.get(`/collections/${id}`);
    return collection.data;
  },

  async addDisksToCollection(collection, disks) {
    let updatedCollection =
      await axios.post(`/collections/${collection.id}/addDisks`, {
        disks: disks
      });

    return updatedCollection.data;
  }
}
