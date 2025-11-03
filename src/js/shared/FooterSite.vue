<!-- FOOTER сайта -->

<template>
  <footer class="footer">
    <div class="container">

      <!-- Присоединиться к чат-боту -->
      <div class="join-wrap">
        <h2 class="join-name">
          Присоединяйтесь к сообществу деловых знакомств в Telegram
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
        <p class="p-footer">© 2025 Все права защищены</p>

        <!-- Договор публичной оферты -->
        <div class="offer-wrap">
          <router-link to="/offer" style="text-decoration: none;">
            <p class="offer-about">Договор публичной оферты</p>
          </router-link>
        </div>

        <!-- Элементы способов связи -->
        <ul class="social-network-ico">

          <li class="telegram">
            <a href="https://t.me/business_dating_bot" target="_blank" class="social-link" rel="noopener noreferrer">
              <i class="fab fa-telegram"></i>
            </a>
          </li>

          <li class="whatsapp">
            <a href="https://www.whatsapp.com/" target="_blank" class="social-link" rel="noopener noreferrer">
              <i class="fab fa-whatsapp"></i>
            </a>
          </li>

          <li class="vk">
            <a href="https://vk.com/" target="_blank" class="social-link" rel="noopener noreferrer">
              <i class="fab fa-vk"></i>
            </a>
          </li>

          <li class="ok">
            <a href="https://ok.ru/" target="_blank" class="social-link" rel="noopener noreferrer">
              <i class="fab fa-odnoklassniki"></i>
            </a>
          </li>

        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup name="FooterSite">
</script>