import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticlePage from '@/views/Report/Article.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'article',
    component: ArticlePage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
