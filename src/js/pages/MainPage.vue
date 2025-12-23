<!-- ГЛАВНАЯ СТРАНИЦА САЙТА - "MainPage" -->

<template>
  <div class="page-wrapper">
    <!-- Контейнер для фона (замена ::before из CSS) -->
    <div class="background-container">
      <!-- aria-hidden - атрибут, делающий декоративное изображение невидимым для пользователей скрин-ридеров -->
      <picture aria-hidden="true">
        <!-- WebP для современных браузеров -->
        <source srcset="images/background.webp" type="image/webp">
        <!-- Fallback на PNG -->
        <img class="background-img" src="images/background.png" alt="" width="1024" height="662" fetchpriority="high"
          loading="eager">
      </picture>
    </div>

    <!-- ОПИСАНИЕ главной страницы -->
    <MainDescription />

    <!-- Раздел СТАТЬИ -->
    <section class="articles">
      <div class="container">

        <!-- ИЗБРАННЫЕ статьи - Визуальная карусель из 6 статей с Swiper -->
        <div class="recommended-articles-wrap">
          <h2 class="recommended-articles-name">
            Избранные статьи
          </h2>

          <p class="recommended-articles-about">
            Ежедневно обновляемая подборка материалов о бизнесе, партнерстве и управлении
          </p>

          <!-- Показываем сетку ИЗБРАННЫЕ статьи только если есть данные -->
          <div v-if="carousel.length === 0" class="loading">Загрузка статей...</div>

          <!-- Карусель Swiper на мобильном (≤768px) -->
          <div v-else-if="isMobile" class="swiper-container">
            <!-- Добавили EffectCoverflow -->
            <!-- Изменено на 1.3 для показа части соседних слайдов -->
            <!-- Увеличено расстояние для "выглядывания" -->
            <!-- Центрируем активный слайд -->
            <!-- Включаем 3D-эффект coverflow -->
            <swiper :key="carouselKey" :modules="[Navigation, Pagination, Autoplay, EffectCoverflow]"
              :autoplay="{ delay: 3000, disableOnInteraction: false }" :pagination="{ clickable: true }"
              :navigation="true" :slidesPerView="1.6" :spaceBetween="10" :centeredSlides="true" :effect="'coverflow'"
              :coverflowEffect="{
                rotate: 120, // Угол поворота боковых слайдов (в градусах; уменьши до 0, если не нужен поворот)
                stretch: 0, // Растяжение (0 для симметрии)
                depth: 2000, // Глубина 3D-эффекта (больше — сильнее)
                modifier: 0.5, // Модификатор масштаба (играй с 0.5–2 для настройки)
                slideShadows: true // Тени для реализма (можно убрать, если мешает)
              }" :loop="true" class="my-swiper">
              <swiper-slide v-for="(article, index) in carousel" :key="article.id">
                <router-link :to="article.link" class="swiper-slide-card">
                  <h2 class="hidden-tag" aria-label="Избранная статья из карусели для мобильного"> </h2>
                  <h3 class="el-articles-name">{{ article.name }}</h3>
                  <p class="el-articles-about">{{ article.about }}</p>
                </router-link>
              </swiper-slide>
            </swiper>
          </div>

          <!-- Сетка 3x2 на десктопе (>768px) -->
          <div v-else class="articles-grid">
            <router-link :to="article.link" :key="article.id" class="article-card" v-for="(article, index) in carousel">
              <h2 class="hidden-tag" aria-label="Избранная статья из сетки 3x2 для десктопа"> </h2>
              <h3 class="el-articles-name">{{ article.name }}</h3>
              <p class="el-articles-about">{{ article.about }}</p>
            </router-link>
          </div>
        </div>

        <!-- Кнопка Деловые знакомства -->
        <div class="btn-wrap">
          <a class="show-btn btn-link" href="https://t.me/business_dating_bot" target="_blank" rel="noopener noreferrer">
            Деловые знакомства
          </a>
        </div>


        <!-- ВСЕ статьи - Список -->
        <h3 class="all-articles-name">
          Все статьи
        </h3>

        <!-- "Элементы Списка статей" - Динамический список с v-for -->
        <ul class="el-articles-wrap">
          <li class="el-articles" v-for="(article, index) in articles" :key="article.id" v-show="index < 10 || showAll">
            <router-link :to="article.link" class="el-articles-link">
              <h4 class="el-articles-number">
                {{ article.id }} <!-- Динамический номер из массива -->
              </h4>
              <h4 class="el-articles-name">
                {{ article.name }} <!-- Динамическое название -->
              </h4>
              <p class="el-articles-about">
                {{ article.about }} <!-- Динамическое описание -->
              </p>
            </router-link>
          </li>
        </ul>

        <!-- Кнопка с динамическим текстом -->
        <div class="shows-all-wrap">
          <button @click="toggleShowAll" class="btn-link shows-all">
            {{ buttonText }}
            <!-- Иконка стрелки (если Bootstrap Icons установлены) -->
            <i :class="['fas', 'fa-chevron-' + (showAll ? 'up' : 'down'), 'ms-2']"></i>
          </button>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup name="MainPage">
// Блок ОПИСАНИЕ главной страницы
import MainDescription from '../shared/MainDescription.vue';

// Импорты Swiper для карусели
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const showAll = ref(false);
const articles = ref([
  { id: 1, link: '/page1', name: 'Секреты разведки: как справиться с тревогой?', about: 'Эффективный метод борьбы с тревожными состояниями' },
  { id: 2, link: '/page2', name: 'Как выбрать арбуз любимой девушке?', about: 'Простой гид по выбору вкусного арбуза для романтического сюрприза' },
  { id: 3, link: '/page3', name: 'Как выбрать дыню любимой девушке?', about: 'Простой гид по выбору сладкой дыни для романтического подарка' },
  { id: 4, link: '/page4', name: 'Выбор стратегии по MBA', about: 'Ключ к успеху на рынке - наличие стратегии' },
  { id: 5, link: '/page5', name: 'Управление людьми', about: 'Методы повышения эффективности работы коллектива' },
  { id: 6, link: '/page6', name: 'Законы удачи', about: 'Физика привлечения удачи' },
  { id: 7, link: '/page7', name: 'Как влюбить в себя кого угодно?', about: 'Секреты счастливой любви' },
  { id: 8, link: '/page8', name: 'Как быстро восстановить упадок сил и энергии', about: 'Методы восстановления энергии после усталости' },
  { id: 9, link: '/page9', name: 'Как поймать счастье', about: 'Секретная методика' },
  { id: 10, link: '/page10', name: '7 правил как привлечь богатство', about: 'На основе книги "Самый богатый человек в Вавилоне"' },
  { id: 11, link: '/page11', name: 'Где искать спонсоров и коммерческих партнеров \n для мероприятия', about: 'Готовый гид для организаторов ивентов' },
  { id: 12, link: '/page12', name: 'Каковы 5 «П» сотрудничества?', about: 'Пять «П» сотрудничества: как команды становятся сильнее, чем сумма своих частей' },
  { id: 13, link: '/page13', name: 'Секреты построения совместного счастливого будущего \n от наших бабушек', about: 'Как советские женщины строили брак' },
  { id: 14, link: '/page14', name: 'Что едят нутрициологи?', about: 'Здоровое питание - основа долголетия и здоровья' },
  { id: 15, link: '/page15', name: 'Духовность как ключ к успеху в материальном мире', about: 'Как развиваться духовно и при этом жить в изобилии' },
  { id: 16, link: '/page16', name: 'Коллаборации как взаимовыгодное партнерство', about: 'Взаимовыгодное сотрудничество' },
  { id: 17, link: '/page17', name: 'Правила женщины, которая получает всё', about: 'Секреты всех уверенных женщин' },
  { id: 18, link: '/page18', name: 'Как быстро распознать психопата?', about: '10 чётких признаков, чтобы не стать жертвой харизмы и холода' },
  { id: 19, link: '/page19', name: 'Ситуационное лидерство: \n цель, идеи и суть концепции руководства', about: 'Как работает эта модель руководства?' },
  { id: 20, link: '/page20', name: 'Как понять, что это «твой» человек?', about: 'Как распознать настоящую любовь \n и найти того, с кем можно быть собой?' },
]);

// Реактивная переменная для сетки
const carousel = ref([]);

// Переменная для определения мобильного режима (≤768px)
const isMobile = ref(false);

// Ключ для принудительного обновления Swiper
const carouselKey = ref(0);

// Избранные ID статей
const favoriteIds = [1, 7, 10, 17, 18, 20];

// Функция для проверки ширины экрана
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

// Функция загрузки сетки с ежедневным сдвигом (ВРЕМЕННО: сдвиг при КАЖДОЙ перезагрузке для теста!)
const loadCarousel = () => {
  const stored = JSON.parse(localStorage.getItem('articles') || '[]');
  if (stored.length > 0) {
    articles.value = stored;
  }

  const favoriteArticles = articles.value.filter(article => favoriteIds.includes(article.id));

  if (favoriteArticles.length === 0) {
    carousel.value = [];
    return;
  }

  console.log('Favorite articles:', favoriteArticles.map(a => a.id));

  // ВРЕМЕННО: убрана проверка даты — сдвиг при каждом вызове (для теста)
  let currentIndex = parseInt(localStorage.getItem('currentIndex') || '0');
  currentIndex = (currentIndex + 1) % favoriteArticles.length; // Всегда сдвигаем на 1
  localStorage.setItem('currentIndex', currentIndex.toString());

  console.log('Current index after shift:', currentIndex);

  const numToShow = Math.min(6, favoriteArticles.length);
  const endIndex = (currentIndex + numToShow) % favoriteArticles.length;
  if (endIndex > currentIndex) {
    carousel.value = favoriteArticles.slice(currentIndex, endIndex);
  } else {
    carousel.value = [...favoriteArticles.slice(currentIndex), ...favoriteArticles.slice(0, endIndex)];
  }

  // Принудительно обновляем ключ Swiper
  carouselKey.value++;

  console.log('Carousel articles (favorites only):', carousel.value.map(a => a.id));
};

// Кнопка для переключения видимости статей
const buttonText = computed(() => showAll.value ? 'Свернуть статьи' : 'Показать ещё статьи');
const toggleShowAll = () => {
  showAll.value = !showAll.value;
};

// Вызов проверки мобильного режима при монтировании и изменении размера окна
onMounted(() => {
  loadCarousel();
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

// даляем слушатель при размонтировании
onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>