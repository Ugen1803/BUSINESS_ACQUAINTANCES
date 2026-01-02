<!-- FOOTER сайта -->

<template>
  <div class="container">

    <!-- Присоединиться к чат-боту -->
    <div class="join-wrap">
      <h2 class="join-name">
        Присоединяйтесь к сообществу <br>
        деловых знакомств в Telegram
      </h2>
      <!-- <p class="join-about">
          Присоединяйтесь к сообществу деловых знакомств в Telegram
        </p> -->
      <div class="btn-connect">
        <a class="btn-link" href="https://t.me/business_dating_bot" target="_blank" rel="noopener noreferrer">
          Открыть чат-бот
        </a>
      </div>

    </div>
    <div class="footer-wrap">
      <p class="p-footer">© 2026 Все права защищены</p>

      <!-- Договор публичной оферты -->
      <div class="offer-wrap">
        <router-link to="/offer" style="text-decoration: none;">
          <p class="offer-about">Договор публичной оферты</p>
        </router-link>
      </div>

      <!-- Элементы способов связи -->
      <ul class="social-network-ico">

        <!-- aria-label - атрибут, добавляющий описательный текст, который будет виден только для скрин-ридеров -->
        <li class="telegram">
          <a class="social-link" href="https://t.me/business_dating_bot" aria-label="Telegram-бот для бизнес-знакомств"
            target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-telegram"></i>
          </a>
        </li>

        <li class="dzen">
          <a class="social-link" href="https://dzen.ru/" aria-label="Переход на сайт Дзен" target="_blank"
            rel="noopener noreferrer">
            <i class="fa-brands fa-yandex"></i>
          </a>
        </li>

        <li class="vk">
          <a class="social-link" href="https://vk.com/" aria-label="Переход на сайт Вконтакте" target="_blank"
            rel="noopener noreferrer">
            <i class="fa-brands fa-vk"></i>
          </a>
        </li>

      </ul>
    </div>
  </div>
</template>

<script setup name="FooterSite">
</script>