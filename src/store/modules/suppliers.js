export default {
  namespaced: true,
  state: {
    suppliersList: [
      {
        id: 1,
        title: 'Політ',
        image: 'https://onedeal.com.ua/wp-content/uploads/2021/12/3-3.jpg',
        icons: ['https://cdn-icons-png.flaticon.com/128/3097/3097180.png'],
      },
      {
        id: 5,

        title: 'Надійність',
        image:
          'https://jurist-blog.com.ua/wp-content/uploads/2016/02/pereviriti-biznes-partnera.jpg',
        icons: [
          'https://cdn-icons-png.flaticon.com/128/11510/11510915.png',
          'https://cdn-icons-png.flaticon.com/128/3097/3097180.png',
        ],
      },
      {
        id: 9,

        title: 'Швидка',
        image:
          'https://trancefm.cyberpe.org/wp-content/images/2022/12/istockphoto-1134867308-612x612-1.jpg',
        icons: [
          'https://cdn-icons-png.flaticon.com/128/11510/11510915.png',
          'https://cdn-icons-png.flaticon.com/128/3097/3097180.png',
        ],
      },
      {
        id: 13,

        title: 'Економ',
        image:
          'https://zdgromada.gov.ua/wp-content/uploads/2023/04/bd4389318609f60fa08b146ccc16356f-300x180.jpg',
        icons: [
          'https://cdn-icons-png.flaticon.com/128/1592/1592325.png',
          'https://cdn-icons-png.flaticon.com/128/3097/3097180.png',
        ],
      },
    ],
  },
  getters: {
    suppliersList: (state) => state.suppliersList,
  },
  mutations: {},
  actions: {},
  modules: {},
}
