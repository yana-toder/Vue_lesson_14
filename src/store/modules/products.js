export default {
  namespaced: true,
  state: {
    productsList: [
      {
        id: 1,
        category: 'clock',
        title: 'Garmin Epix Pro 51mm Slate Gray/Black Band',
        image:
          'https://image.alza.cz/products/PPepixpro2gb3/PPepixpro2gb3.jpg?width=500&height=500',
        price: '21 990,-',
      },
      {
        id: 5,
        category: 'notebook',

        title: 'Asus Vivobook 15 OLED X1505ZA-OLED020W Black',
        image:
          'https://image.alza.cz/products/NA563z100/NA563z100.jpg?width=500&height=500',
        price: '15 990,-',
      },
      {
        id: 9,
        category: 'xerox',

        title: 'Xerox WorkCentre 3025BI',
        image:
          'https://image.alza.cz/products/PX600q1/PX600q1.jpg?width=500&height=500',
        price: '3 549,-',
      },
      {
        id: 13,
        category: 'game',
        title: 'PlayStation VR2 + Horizon Call of the Mountain',
        image:
          'https://image.alza.cz/products/MSX005VR2b1/MSX005VR2b1.jpg?width=500&height=500',
        price: '14 990,-',
      },
    ],
    searchValue: null,
  },
  getters: {
    productsList: (state) => state.productsList,
    filteredProductsList: (state) => {
      if (state.searchValue)
        return state.productsList.filter((product) =>
          product.title.toLowerCase().includes(state.searchValue.toLowerCase())
        )
      return state.productsList
    },
    searchValue: (state) => state.searchValue,
  },
  mutations: {
    setSearchValue(state, val) {
      state.searchValue = val
    },
    addProduct(state, data) {
      state.productsList.push(data)
    },
  },
  actions: {
    setSearchValue({commit}, val) {
      commit('setSearchValue', val)
    },
    addProduct({commit}, data) {
      commit('addProduct', {
        id: new Date().getTime(),
        ...data,
      })
    },
  },
  modules: {},
}
