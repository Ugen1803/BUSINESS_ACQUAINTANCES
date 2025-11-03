'use strict';

/**
 * Компоненты VUEJS
 */
/* APP */
import App from './App.vue';
/* Импорт стилей Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
/* pages */
import MainPage from './pages/MainPage.vue';
import Offer from './pages/Offer.vue';
import Page1 from './pages/Page1.vue';
import Page2 from './pages/Page2.vue';
import Page3 from './pages/Page3.vue';
import Page4 from './pages/Page4.vue';
import Page5 from './pages/Page5.vue';
import Page6 from './pages/Page6.vue';
import Page7 from './pages/Page7.vue';
import Page8 from './pages/Page8.vue';
import Page9 from './pages/Page9.vue';
import Page10 from './pages/Page10.vue';
import Page11 from './pages/Page11.vue';
import Page12 from './pages/Page12.vue';
import Page13 from './pages/Page13.vue';
import Page14 from './pages/Page14.vue';
import Page15 from './pages/Page15.vue';
import Page16 from './pages/Page16.vue';
import Page17 from './pages/Page17.vue';
import Page18 from './pages/Page18.vue';
import Page19 from './pages/Page19.vue';
import Page20 from './pages/Page20.vue';


/**
 * Импорт модуля vue-router
 */
import { createRouter, createWebHashHistory, RouterLink } from 'vue-router';

/**
 * Экземпляр VueRouter с Маршрутами для страниц
 * history: createWebHistory():
 * Более мощный и гибкий способ настроить историю маршрутизации
 * Использует HTML5 History API для сохранения состояния приложения
 * Требует настройки сервера для обслуживания маршрутов
 * Позволяет использовать относительные ссылки и имеет лучшую поддержку SEO
 */
const router = createRouter({  // Экземпляр:
  // history: createWebHistory(), // Более мощный и гибкий способ настроить историю маршрутизации
  history: createWebHashHistory(), // Метод управления историей маршрутов Vue Router
  components: {
    MainPage, Offer, Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9, Page10, Page11, Page12, Page13, Page14, Page15, Page16, Page17, Page18, Page19, Page20,
  }, // Используемые страницы-компоненты
  routes: [  // Маршруты между страницами:
    {
      path: '/',
      name: 'main-page',
      component: () => import('@/pages/MainPage.vue'),
    },
    {
      path: '/offer',
      name: 'offer-page',
      component: () => import('@/pages/Offer.vue'),
    },
    {
      path: '/page1',
      name: 'page-1',
      component: () => import('@/pages/Page1.vue')
    },
    {
      path: '/page2',
      name: 'page-2',
      component: () => import('@/pages/Page2.vue')
    },
    {
      path: '/page3',
      name: 'page-3',
      component: () => import('@/pages/Page3.vue')
    },
    {
      path: '/page4',
      name: 'page-4',
      component: () => import('@/pages/Page4.vue')
    },
    {
      path: '/page5',
      name: 'page-5',
      component: () => import('@/pages/Page5.vue')
    },
    {
      path: '/page6',
      name: 'page-6',
      component: () => import('@/pages/Page6.vue')
    },
    {
      path: '/page7',
      name: 'page-7',
      component: () => import('@/pages/Page7.vue')
    },
    {
      path: '/page8',
      name: 'page-8',
      component: () => import('@/pages/Page8.vue')
    },
    {
      path: '/page9',
      name: 'page-9',
      component: () => import('@/pages/Page9.vue')
    },
    {
      path: '/page10',
      name: 'page-10',
      component: () => import('@/pages/Page10.vue')
    },
    {
      path: '/page11',
      name: 'page-11',
      component: () => import('@/pages/Page11.vue')
    },
    {
      path: '/page12',
      name: 'page-12',
      component: () => import('@/pages/Page12.vue')
    },
    {
      path: '/page13',
      name: 'page-13',
      component: () => import('@/pages/Page13.vue')
    },
    {
      path: '/page14',
      name: 'page-14',
      component: () => import('@/pages/Page14.vue')
    },
    {
      path: '/page15',
      name: 'page-15',
      component: () => import('@/pages/Page15.vue')
    },
    {
      path: '/page16',
      name: 'page-16',
      component: () => import('@/pages/Page16.vue')
    },
    {
      path: '/page17',
      name: 'page-17',
      component: () => import('@/pages/Page17.vue')
    },
    {
      path: '/page18',
      name: 'page-18',
      component: () => import('@/pages/Page18.vue')
    },
    {
      path: '/page19',
      name: 'page-19',
      component: () => import('@/pages/Page19.vue')
    },
    {
      path: '/page20',
      name: 'page-20',
      component: () => import('@/pages/Page20.vue')
    },
  ],
  // Всегда скроллим страницы наверх, при переходе на них
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

/**
 * Подключение приложения VUEJS к проекту
 */
import { createApp } from 'vue';

/* Настройка приложения */
const app = createApp(App); // в Vue 3 нет конструктора Vue, используется fu createApp для создания экземпляра приложения
app.use(router); // Подключение роутинга между страницами в приложении
app.mount('#app'); // Подключение приложения к элементу id="app"
