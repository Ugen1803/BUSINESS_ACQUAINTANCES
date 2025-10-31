<!-- APP -->

<template>
  <div id="app">

    <!-- HEADER и МЕНЮ сайта -->
    <HeaderSite />

    <!-- MAIN - Главная станица -->
    <main class="main">
      <RouterView />
    </main>

    <!-- FOOTER - Подвал сайта -->
    <FooterSite />

    <!-- Стрелка Верх -->
    <ScrollToTop />

  </div>
</template>

<!-- Подключение Стилей -->
<style scoped>
@import '../css/style.css';
</style>

<!-- Настройка СОСТОЯНИЯ и Свойств элемента .app -->
<script setup name="App">

//onMounted / хук из Composition API для выполнения кода после монтирования компонента
import { ref, onMounted } from 'vue';

/**
 * Компоненты VUEJS
 */

/* shared - общие компоненты страниц */
import HeaderSite from './shared/HeaderSite.vue';
import FooterSite from './shared/FooterSite.vue';
import ScrollToTop from './components/ScrollToTop.vue';

</script>
