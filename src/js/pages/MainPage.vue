<!-- ГЛАВНАЯ СТРАНИЦА САЙТА - "MainPage" -->

<template>
  <div class="page-wrapper">
    <h1 class="hidden">Деловые знакомства</h1>

    <!-- ОПИСАНИЕ главной страницы -->
    <MainDescription />

    <!-- Раздел СТАТЬИ -->
    <section class="articles">
      <div class="container">
        <h2 class="hidden">Статьи</h2>

        <!-- ИЗБРАННЫЕ статьи - Визуальная карусель из 6 статей с Swiper -->
        <div class="recommended-articles-wrap">
          <h2 class="recommended-articles-name">
            Избранные статьи
          </h2>

          <p class="recommended-articles-about">
            Ежедневно обновляемая подборка материалов о психологии, партнерстве и личностном росте
          </p>

          <!-- Показываем сетку только если есть данные -->
          <div v-if="carousel.length === 0" class="loading">Загрузка статей...</div>
          <div v-else class="articles-grid">
            <router-link :to="article.link" :key="index" class="article-card" v-for="(article, index) in carousel">
              <h4 class="el-articles-name">{{ article.name }}</h4>
              <p class="el-articles-about">{{ article.about }}</p>
            </router-link>
          </div>

        </div>

        <!-- ВСЕ статьи - Список -->
        <h2 class="all-articles-name">
          Все статьи
        </h2>

        <!-- "Элементы Списка статей" - Динамический список с v-for -->
        <ul class="el-articles-wrap">
          <li class="el-articles" v-for="(article, index) in articles" :key="article.id" v-show="index < 10 || showAll">
            <router-link :to="article.link" class="el-articles-link">
              <h3 class="el-articles-number">
                {{ article.id }} <!-- Динамический номер из массива -->
              </h3>
              <h3 class="el-articles-name">
                {{ article.name }} <!-- Динамическое название -->
              </h3>
              <p class="el-articles-about">
                {{ article.about }} <!-- Динамическое описание -->
              </p>
            </router-link>
          </li>

          <!-- Кнопка с динамическим текстом -->
          <button @click="toggleShowAll" class="btn-link shows-all">
            {{ buttonText }}
            <!-- Иконка стрелки (если Bootstrap Icons установлены) -->
            <i :class="showAll ? 'bi bi-chevron-up ms-2' : 'bi bi-chevron-down ms-2'"></i>
          </button>

        </ul>
      </div>
    </section>
  </div>
</template>

<script setup name="MainPage">
// Блок ОПИСАНИЕ главной страницы
import MainDescription from '../shared/MainDescription.vue';

// Массив Названий для статей
import { ref, computed, onMounted } from 'vue';

const showAll = ref(false);
const articles = ref([
  { id: 1, link: '/page1', name: 'Секреты разведки: как справиться с тревогой', about: 'Эффективный метод борьбы с тревожными состояниями' },
  { id: 2, link: '/page2', name: 'Как выбрать арбуз любимой девушке?', about: 'Простой гид по выбору вкусного арбуза для романтического сюрприза' },
  { id: 3, link: '/page3', name: 'Как выбрать дыню любимой девушке?', about: 'Простой гид по выбору сладкой дыни для романтического подарка' },
  { id: 4, link: '/page4', name: 'Выгодное партнерство на основе нейромедиаторов', about: 'Статья скоро будет загружена' },
  { id: 5, link: '/page5', name: 'Соционика - ключ к поиску своих', about: 'Статья скоро будет загружена' },
  { id: 6, link: '/page6', name: 'Как привлечь удачу, основы физики', about: 'Статья скоро будет загружена' },
  { id: 7, link: '/page7', name: 'Как влюбить в себя кого угодно?', about: 'Секреты счастливой любви' },
  { id: 8, link: '/page8', name: 'Эмоциональные потребности', about: 'Статья скоро будет загружена' },
  { id: 9, link: '/page9', name: 'Специи для гурманов', about: 'Статья скоро будет загружена' },
  { id: 10, link: '/page10', name: 'Секреты богатства', about: 'Статья скоро будет загружена' },
  { id: 11, link: '/page11', name: 'Женщине нужна перспектива!', about: 'Статья скоро будет загружена' },
  { id: 12, link: '/page12', name: 'Как сделать так, чтобы вас боялись и уважали?', about: 'Статья скоро будет загружена' },
  { id: 13, link: '/page13', name: 'Как воздействовать и добиваться своего?', about: 'Статья скоро будет загружена' },
  { id: 14, link: '/page14', name: 'Что едят нутрициологи?', about: 'Здоровое питание - основа долголетия и здоровья' },
  { id: 15, link: '/page15', name: 'Рецепт счастья от психолога', about: 'Статья скоро будет загружена' },
  { id: 16, link: '/page16', name: 'Линька у человека: как бороться', about: 'Статья скоро будет загружена' },
  { id: 17, link: '/page17', name: 'Правила женщины, которая получает всё', about: 'Секреты всех уверенных женщин' },
  { id: 18, link: '/page18', name: 'Как быстро распознать психопата?', about: '10 чётких признаков, чтобы не стать жертвой харизмы и холода' },
  { id: 19, link: '/page19', name: 'Как проверить совместимость в любви?', about: 'Статья скоро будет загружена' },
  { id: 20, link: '/page20', name: 'Как понять, что это «твой» человек?', about: 'Как распознать настоящую любовь и найти того, с кем можно быть собой?' },
]);

// Реактивная переменная для сетки
const carousel = ref([]);

// Функция загрузки сетки с ежедневным сдвигом
const loadCarousel = () => {
  const stored = JSON.parse(localStorage.getItem('articles') || '[]');
  if (stored.length > 0) {
    articles.value = stored;
  }

  const today = new Date().toDateString(); // Сегодняшняя дата (строка)
  let lastUpdate = localStorage.getItem('lastUpdate');
  let currentIndex = parseInt(localStorage.getItem('currentIndex') || '0');

  console.log('Before logic - Today:', today, 'Last update:', lastUpdate, 'Current index:', currentIndex);

  // Логика сдвига
  if (lastUpdate === null) {
    // Первый запуск: начинаем с 0, сохраняем дату
    currentIndex = 0;
    lastUpdate = today;
    localStorage.setItem('currentIndex', currentIndex.toString());
    localStorage.setItem('lastUpdate', lastUpdate);
  } else if (lastUpdate !== today) {
    // Новый день: сдвигаем индекс на 1 циклически
    currentIndex = (currentIndex + 1) % articles.value.length;
    localStorage.setItem('currentIndex', currentIndex.toString());
    localStorage.setItem('lastUpdate', today);
  }
  // Если lastUpdate == today, ничего не делаем (используем сохраненный currentIndex)

  console.log('After logic - Current index:', currentIndex, 'Last update:', lastUpdate);

  // Берем 6 статей начиная с currentIndex, циклически
  const endIndex = (currentIndex + 6) % articles.value.length;
  if (endIndex > currentIndex) {
    carousel.value = articles.value.slice(currentIndex, endIndex);
  } else {
    // Обертка: от currentIndex до конца + от начала до endIndex
    carousel.value = [...articles.value.slice(currentIndex), ...articles.value.slice(0, endIndex)];
  }

  console.log('Carousel articles:', carousel.value.map(a => a.id));
};
// Кнопка для переключения видимости статей
const buttonText = computed(() => showAll.value ? 'Свернуть статьи' : 'Показать ещё статьи');
const toggleShowAll = () => {
  showAll.value = !showAll.value;
};

// Вызов обновления при монтировании
onMounted(() => {
  loadCarousel();
});
</script>