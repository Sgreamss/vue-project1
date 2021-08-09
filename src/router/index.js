import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp'
import SignIn from '../views/SignIn'
import Main from '../views/user/Main'
import Admin from '../views/admin/Admin'
import Board from '../views/admin/Board'
import Profile from '../views/user/Profile'
import Quiz from '../views/user/Quiz'
import EditQuestion from '../views/admin/EditQuestion'
import Creator from '../views/admin/Creator'
import Rewards from '../views/user/RedeemReward'
import EditReward from '../views/admin/EditReward'

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
        path: '/rewards',
        name: 'Rewards',
        component: Rewards
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
        path: '/editReward',
        name: 'EditReward',
        component: EditReward
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