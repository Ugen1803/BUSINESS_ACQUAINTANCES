<template>
    <!-- Стрелка вверх, стилизированная Bootstrap -->
    <a href="#" ref="scrollBtn" class="btn btn-primary position-fixed d-none"
        style="bottom: 140px; right: 6px; --bs-btn-font-size: 2.5rem; --bs-btn-active-bg: rgb(54, 42, 42); --bs-btn-active-border-color:rgb(54, 42, 42); z-index: 1000; border-radius: 50%; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center;"
        @click="scrollToTop">
        ↑
    </a>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Ссылка на кнопку ВВЕРХ
const scrollBtn = ref(null);
let scrollHandler;

// Функция показа/скрытия при скролле (Vue-адаптация)
const handleScroll = () => {
    if (window.scrollY > 100) {
        scrollBtn.value.classList.remove('d-none');
        scrollBtn.value.classList.add('show');  // Добавим класс для плавности
    } else {
        scrollBtn.value.classList.add('d-none');
        scrollBtn.value.classList.remove('show');
    }
};

// Функция прокрутки наверх
const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Монтаж и размонтаж событий (Lifecycle hooks)
onMounted(() => {
    scrollHandler = handleScroll;
    window.addEventListener('scroll', scrollHandler);
});

onUnmounted(() => {
    window.removeEventListener('scroll', scrollHandler);
});
</script>

<style scoped>
/* Плавность появления со стиранием Bootstrap переменных (опционально) */
#scrollToTop {
    transition: opacity 0.3s, transform 0.3s;
}

/* Hover-эффект через CSS variables Bootstrap (если хочешь кастомный цвет) */
#scrollToTop:hover {
    transform: translateY(-2px);
    --bs-btn-bg: #0056b3;
    /* Темнее primary */
}
</style>
