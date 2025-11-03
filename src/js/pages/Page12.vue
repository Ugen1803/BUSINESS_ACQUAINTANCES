<!-- Cтраница со Статьёй - " PageArticle" -->
<!-- Статья №12 -->


<template>
    <!-- Блок информации о данной странице -->
    <section class="page-articles">
        <div class="container">
            <h2 class="hidden">О данной странице</h2>

            <!-- Навигация хлебные крошки -->
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/">ГЛАВНАЯ СТРАНИЦА</router-link>
                    </li>
                    <!-- <li class="breadcrumb-item-active" aria-current="page">
                        СТАТЬЯ №12
                    </li> -->
                </ol>
            </nav>

            <!-- Блок со Статьёй -->
            <div class="page-article-wrap">
                <img src="../../images/section-promo/loading.gif" alt="loading" />
                <h3 class="el-page-article-heading">
                    Статья готовится к публикации. Следите за обновлениями!
                </h3>
            </div>

        </div>
    </section>
</template>

<script setup name="Page12">

</script>
