<!-- HEADER и МЕНЮ сайта -->

<template>
  <div class="container">

    <!-- HEADER и МЕНЮ сайта -->
    <nav class="header-nav">

      <!-- Меню сайта -->
      <ul class="header-col">

        <!-- Лого Бренда -->
        <li class="brand-btn">
          <router-link to="/">
            <picture>
              <source srcset="images/header/brand-ico.webp" type="image/webp">
              <img class="brand-ico" src="images/header/brand-ico.png" alt="brand-ico" width="55" height="55">
            </picture>
            <!-- <img src="images/header/brand-ico.webp" alt="brand-ico" class="brand-ico" width="55" height="55"> -->
          </router-link>
        </li>

        <!-- Название Бренда -->
        <li class="namebrand-btn">
          <a class="namebrand-link" href="https://t.me/business_dating_bot" target="_blank" rel="noopener noreferrer">
            <h1 class="namebrand-heading">
              Деловые знакомства
            </h1>
          </a>
        </li>

        <!-- Кнопка Присоединяйся к нам -->
        <li class="btn-connect">
          <a class="btn-link" href="https://t.me/business_dating_bot" target="_blank" rel="noopener noreferrer">
            Присоединиться
          </a>
        </li>

      </ul>
    </nav>
  </div>
</template>

<script setup name="HeaderSite">

</script>
