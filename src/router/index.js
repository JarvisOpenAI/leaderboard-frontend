import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../layout/Index.vue';
import i18n from '@/lang/index.js';
import store from '../store';
const redirect = store.state.token ? '/challenge' : '/challenge/detail/100';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: Layout,
      redirect: redirect,
      children: [
        {
          path: '/challenge',
          name: 'Challenge',
          meta: { title: i18n.global.t('challenge.challenge') },
          children: [
            {
              path: '',
              name: 'ChallengeIndex',
              component: () => import('../views/challenge/Challenge.vue'),
            },
            {
              path: 'detail/:raceId',
              component: () => import('../views/challenge/Detail.vue'),
              name: 'EventDetail',
              meta: {
                title: i18n.global.t('challenge.eventDetails'),
                showcrumb: true,
                activeMenu: '/challenge',
              },
            },
          ],
        },
        {
          path: '/team',
          component: () => import('../views/team/Team.vue'),
          name: 'Team',
          meta: { title: i18n.global.t('team.team') },
        },
        {
          path: '/profile',
          component: () => import('../views/user/Profile.vue'),
          name: 'User',
          meta: { title: i18n.global.t('user.profile') },
        },
        {
          path: '/permissionDenied',
          component: () => import('../views/permission/Denied.vue'),
          name: 'Permission',
          meta: { title: i18n.global.t('permission.denied') },
        },
      ],
    },
    {
      path: '/auth',
      component: () => import('../views/auth/Index.vue'),
      children: [
        {
          path: 'login',
          name: 'Login',
          component: () => import('../views/auth/Login.vue'),
        },
        {
          path: 'signup',
          name: 'Signup',
          component: () => import('../views/auth/Signup.vue'),
        },
        {
          path: 'forget',
          name: 'Forget',
          component: () => import('../views/auth/Forget.vue'),
        },
        {
          path: 'resetcode/:uid/:token',
          name: 'Resetcode',
          component: () => import('../views/auth/Resetcode.vue'),
        },
        {
          path: 'verifyEmail',
          name: 'VerifyEmail',
          component: () => import('../views/auth/VerifyEmail.vue'),
        },
      ],
    },
  ],
});

export default router;
