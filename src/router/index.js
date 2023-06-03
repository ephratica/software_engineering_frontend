import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/SignUp',
      name: 'signup',
      component: () => import('../components/SignUp.vue')
    },
    {
      path: '/TheWelcome',
      name: 'welcome',
      component: () => import('../components/TheWelcome.vue')
    },
    {
      path: '/StudentHome',
      name: 'student home',
      component: () => import('../views/StudentHomeView.vue')
    },
    {
      path: '/TeacherHome',
      name: 'teacher home',
      component: () => import('../views/TeacherHomeView.vue')
    },
    {
      path: '/allExams',
      name: 'all exams',
      component: () => import('../views/allExams.vue')
    },
    {
      path: '/stuExams',
      name: 'stu exams',
      component: () => import('../views/StuExamsView.vue')
    },
    {
      path: '/pay',
      name: 'pay',
      component: () => import('../views/PaymentView.vue')
    }
  ]
})

export default router
