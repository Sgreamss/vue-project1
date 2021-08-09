import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp'
import SignIn from '../views/SignIn'
import Main from '../views/Main'
import Admin from '../views/Admin'
import Board from '../views/Board'
import Profile from '../views/Profile'
import Quiz from '../views/Quiz'
import EditQuestion from '../views/EditQuestion'
import Creator from '../views/Creator'
import Reward from '@/views/Reward'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/signUp',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/reward',
        name: 'Reward',
        component: Reward
    },
    {
        path: '/signIn',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/main',
        name: 'Main',
        component: Main
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin
    },
    {
        path: '/editQuestion',
        name: 'EditQuestion',
        component: EditQuestion
    },
    {
        path: '/quiz',
        name: 'Quiz',
        component: Quiz
    },
    {
        path: '/creator',
        name: 'Creator',
        component: Creator
    },
    {
        path: '/board',
        name: 'Board',
        component: Board
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router