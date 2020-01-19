import createMainApi from './main-api'

export default ({ axios }) => {
  return {
    mainApi: createMainApi({ axios })
  }
}
