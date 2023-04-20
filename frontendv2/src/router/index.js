import Vue from 'vue'
import VueRouter from 'vue-router'
import UploadPage from '@/views/Upload/Upload.vue';
import EditorPage from '@/views/Editor/Editor.vue';
import ArticlePage from '@/views/Relatorio/Article.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/upload',
    name: 'upload',
    component: UploadPage
  },
  {
    path: '/editor',
    name: 'editor',
    component: EditorPage
  },
  {
    path: '/article',
    name: 'article',
    component: ArticlePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
