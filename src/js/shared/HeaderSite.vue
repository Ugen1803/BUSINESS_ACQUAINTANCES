<!-- HEADER и МЕНЮ сайта -->

<template>
  <header class="header">
    <div class="container">
      <!-- HEADER и МЕНЮ сайта -->
      <nav class="header-nav">

        <!-- Меню сайта -->
        <ul class="header-col">

          <!-- Лого Бренда -->
          <li class="brand-btn">
            <router-link to="/">
              <img class="brand-ico" src="images/header/brand-ico.png" alt="brand" />
            </router-link>
          </li>

          <!-- Название Бренда -->
          <li class="namebrand-btn">
            <a class="namebrand-link" href="https://t.me/business_dating_bot" target="_blank" rel="noopener noreferrer">
              <div class="namebrand-heading">
                Деловые знакомства
              </div>
            </a>
          </li>

          <!-- Кнопка Присоединяйся к нам -->
          <li class="btn-connect">
            <a class="btn-link show" href="https://t.me/business_dating_bot" target="_blank" rel="noopener noreferrer">
              Присоединяйтесь к нам
            </a>
          </li>

        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup name="HeaderSite">

</script>
