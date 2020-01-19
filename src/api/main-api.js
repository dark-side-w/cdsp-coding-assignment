export default ({ axios }) => {
  return {
    async getItems () {
      const { data } = await axios.get('/api/items')
      return data
    },
    async getItem (id) {
      const { data } = await axios.get(`/api/items?id=${id}`)
      return data
    },
    async getUsers () {
      const { data } = await axios.get('/api/users')
      return data
    }
  }
}
