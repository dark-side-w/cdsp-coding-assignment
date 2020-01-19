export default ({ axios }) => {
  return {
    async getItems (page) {
      const { data } = await axios.get(`/api/items?page=${page}`)
      return data
    },
    async getUsers () {
      const { data } = await axios.get('/api/users')
      return data
    }
  }
}
