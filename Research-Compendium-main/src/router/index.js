import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Article from '../views/Article.vue'
import ArticleDetails from '../views/ArticleDetails.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Navbar from '../views/navbar.vue'
import LoggedNav from '../views/loggednav.vue'
import LoggedHome from '../views/loggedHome.vue'
import ProfHome from '../views/ProfHome.vue'
import ProfLogin from '../views/ProfLogin.vue'
import AddingArticles from '../views/AddingArticles.vue'
import settings from '../views/settings.vue'
import loggedAbout from '../views/loggedAbout.vue'
import loggedArticles from '../views/loggedArticles.vue'
import ProfAbout from '../views/ProfAbout.vue'
import ProfArticle from '../views/ProfArticle.vue'
import ProfNavbar from '../views/ProfNavbar.vue'
import LoggedArticleDetails from '../views/LoggedArticleDetails.vue'
import ProfArticleDetails from '../views/ProfArticleDetails.vue'
import ProfSignup from '../views/ProfSignup.vue'
import EditingArticle from '../views/EditingArticle.vue'
import ProfSettings from '../views/ProfSettings.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profhome',
    name: 'profhome',
    component:ProfHome
  },
  {
    path: '/proflogin',
    name: 'proflogin',
    component:ProfLogin
  },
  {
    path: '/addingarticles',
    name: 'addingarticles',
    component:AddingArticles
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView
  },
  {
    path: '/settings',
    name: 'settings',
    component:settings
  },
  {
    path: '/navbar',
    name: 'navbar',
    component:Navbar
  },
  {
    path: '/loggednav',
    name: 'loggednav',
    component:LoggedNav
  },
  {
    path: '/loggedhome',
    name: 'loggedHome',
    component:LoggedHome
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/article',
    name: 'article',
    component: Article

  },
  {
    path: '/Article/:id',
    name: 'ArticleDetails',
    component: ArticleDetails,
    props: true
  },
  {
    path: '/LoggedArticle/:id',
    name: 'LoggedArticleDetails',
    component: LoggedArticleDetails,
    props: true
  },
  {
    path: '/ProfArticle/:id',
    name: 'ProfArticleDetails',
    component: ProfArticleDetails,
    props: true
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/loggedAbout',
    name: 'loggedAbout',
    component: loggedAbout
  },
  {
    path: '/loggedArticles',
    name: 'loggedArticles',
    component: loggedArticles
  },
  {
    path: '/ProfArticle',
    name: 'ProfArticle',
    component: ProfArticle
  },
  {
    path: '/ProfAbout',
    name: 'ProfAbout',
    component: ProfAbout
  },
  {
    path: '/ProfNavbar',
    name: 'ProfNavbar',
    component:ProfNavbar
  },
  {
    path: '/ProfSignup',
    name: 'ProgSignup',
    component:ProfSignup
  },
  {
    path: '/editingarticle',
    name: 'editingarticle',
    component:EditingArticle
  },
  {
    path: '/ProfSettings',
    name: 'ProfSettings',
    component:ProfSettings
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
