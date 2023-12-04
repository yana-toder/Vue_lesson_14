import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import FilterProduct from '../views/FilterProduct.vue'
import EditorProduct from '../views/EditorProduct.vue'
import SuppliersView from '../views/SuppliersView.vue'
import ContactsView from '../views/ContactsView.vue'
import ShoppingRules from '../views/ShoppingRules.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView,
    children: [
      {
        path: 'selector',
        component: FilterProduct,
      },
      {
        path: 'editor',
        component: EditorProduct,
      },
    ],
  },
  {
    path: '/suppliers',
    name: 'suppliers',
    component: SuppliersView,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView,
  },
  {
    path: '/shopping-rules',
    name: 'shopping-rules',
    component: ShoppingRules,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
