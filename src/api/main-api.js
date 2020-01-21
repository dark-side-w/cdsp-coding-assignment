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
    },
    async submit (item) {
      return await axios.post('/api/item', { item: item })
    },
    async sendEmail (requestor, storyteller) {
      return await axios.post('/api/email', { to: [ requestor.Email, storyteller.Email], subject: 'new request', body: `Hi, A new request has been created by ${requestor.DisplayName}.\nCheers, Story Team` })
    }
  }
}
