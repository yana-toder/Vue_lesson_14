import {createStore} from 'vuex'
import products from '@/store/modules/products'
import suppliers from '@/store/modules/suppliers'

export default createStore({
  namespaced: true,
  state: {
    images: [
      'https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg',
      'https://c4.wallpaperflare.com/wallpaper/362/276/920/nature-4k-pc-full-hd-wallpaper-thumb.jpg',
      'https://c4.wallpaperflare.com/wallpaper/845/968/886/nature-winter-snow-1920x1080-nature-winter-hd-art-wallpaper-preview.jpg',
      'https://e1.pxfuel.com/desktop-wallpaper/618/692/desktop-wallpaper-national-park-1920x1080-nature-park.jpg',
    ],
  },
  getters: {
    images: (state) => state.images,
  },
  mutations: {},
  actions: {},
  modules: {
    products,
    suppliers,
  },
})
