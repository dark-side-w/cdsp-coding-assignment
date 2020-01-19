import axios from 'axios'

export default baseUrl => {
  const axiosInstance = axios.create(baseUrl ? { baseURL: baseUrl } : {})

  axiosInstance.setLocaleInterceptor = function (localeState) {
    this.interceptors.request.use(config => {
      if (config.params) {
        config.params.locale = localeState.selected
      }
      return config
    })
  }

  return axiosInstance
}
