export function createGettersFromStoreKeys (state) {
  return Object.keys(state)
    .reduce((getters, key) => {
      getters[key] = (state) => state[key]
      return getters
    }, {})
}

export function createSettersFromStateKeys (state) {
  return Object.keys(state)
    .reduce((setters, key) => {
      setters[`set${capitalizeFirstLetter(key)}`] = (state, val) => {
        state[key] = val
      }
      return setters
    }, {})
}

export function applyDefaultSetters (storeModules) {
  return Object
    .keys(storeModules)
    .reduce((modules, key) => {
      const store = storeModules[key]
      return {
        ...modules,
        [key]: {
          ...store,
          mutations: {
            ...createSettersFromStateKeys(store.state),
            ...store.mutations,
          }
        }
      }
    }, {})
}

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
