import axios from 'axios'

export default {
  async getDisks() {
    let response = await axios.get('/disks');
    return response.data;
  },
  async createDisk(params) {
    let disk = await axios.post('/disks', params);
    return disk.data;
  }
}
