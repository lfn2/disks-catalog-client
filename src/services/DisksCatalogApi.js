import axios from 'axios'

export default {
  async getDisks() {
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
  async getCollections() {
    let collections = await axios.get('/collections');
    return collections.data;
  }
}
