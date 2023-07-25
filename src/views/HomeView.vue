<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <ol class="breadcrumb" itemtype="http://schema.org/BreadcrumbList">
          <li class="breadcrumb-item" itemprop="itemListElement" itemtype="http://schema.org/ListItem">
            <a itemprop="item" href="https://theidea.ru/"><span itemprop="name">Главная</span></a>
            <meta itemprop="position" content="1">
          </li>
          <li class="breadcrumb-item" itemprop="itemListElement" itemtype="http://schema.org/ListItem">
            <a itemprop="item" href="https://theidea.ru/6-myagkaya-mebel"><span itemprop="name">Мягкая мебель</span></a>
            <meta itemprop="position" content="2">
          </li>
          <li class="breadcrumb-item" itemprop="itemListElement" itemtype="http://schema.org/ListItem">
            <a itemprop="item" href="https://theidea.ru/18-divany"><span itemprop="name">Диваны</span></a>
            <meta itemprop="position" content="3">
          </li>
          <li class="breadcrumb-item" itemprop="itemListElement" itemtype="http://schema.org/ListItem">
            <a itemprop="item" href="https://theidea.ru/122-uglovye-divany"><span itemprop="name">Угловые диваны</span></a>
            <meta itemprop="position" content="4">
          </li>
          <li class="breadcrumb-item" itemprop="itemListElement" itemtype="http://schema.org/ListItem">
            <a itemprop="item" href="https://theidea.ru/uglovye-divany/4390-divan-saga-020-013.html" class="text-dark" onclick="return false;"><span itemprop="name">Диван SAGA 020/013</span></a>
            <meta itemprop="position" content="5">
          </li>
        </ol>
      </div>
      <div class="row">
        <div class="model">

        </div>
        <div class="description">
          <h1 class="product-name js-product-name" itemprop="name">
            Диван SAGA 020/013
            <br>
            <span class="product_attribute_name">
              Тёмный бук, Tiana Indigo
            </span>
          </h1>
          <div class="tabs">
            <div class="tabs__name">Характеристики</div>
          </div>
          <div class="tab-content">
            <div class="tab-content__title">Размеры</div>
            <div class="tab-content__text">Д2750 Ш1770 В720</div>
            <div class="tab-content__title">Каркас</div>
            <div class="tab-content__text">массив березы, фанера</div>
            <div class="tab-content__title">Вес</div>
            <div class="tab-content__text">165 кг</div>
            <div class="tab-content__title">Тонировка</div>
            <div class="tab-content__text">Тёмный бук</div>
            <div class="tab-content__title">Ткань на изделии</div>
            <div class="tab-content__text">Tiana Indigo</div>
            <div class="tab-content__title">Коллекция</div>
            <div class="tab-content__text">SAGA</div>
            <div class="tab-content__title">Производитель</div>
            <div class="tab-content__text">The IDEA</div>
            <div class="tab-content__title">Наполнитель</div>
            <div class="tab-content__text">Латексный ППУ, ППУ, периотек</div>
            <div class="tab-content__title">Наполнитель декоративных подушек</div>
            <div class="tab-content__text">синтепух</div>
            <div class="tab-content__title">Основание</div>
            <div class="tab-content__text">массив бука</div>
            <div class="tab-content__title">Материал ткани</div>
            <div class="tab-content__text">согласно категории</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  .container {
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
    margin-right: auto;
    margin-left: auto;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    // margin-right: -1rem;
    // margin-left: -1rem;
  }
  .breadcrumb {
    display: flex;
    flex-wrap: wrap;
    padding: 2rem 0;
    list-style: none;
    background-color: rgba(0,0,0,0);
  }
  .breadcrumb {
    font-size: .75rem;
    color: #bdbdbd;
    margin-bottom: 0;
    line-height: 1rem;
  }
  .breadcrumb-item+.breadcrumb-item::before {
    font-family: 'FontAwesome';
    line-height: 1;
  }
  .breadcrumb-item+.breadcrumb-item::before {
      float: left;
      padding-right: 1rem;
      color: #C8C8C8;
      content: "\F105";
  }
  *, *::before, *::after {
      box-sizing: border-box;
  }
  .model {
    width: 50%;
  }
  .description {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
    padding-right: 1rem;
    padding-left: 1rem;
    .product_attribute_name {
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 110%;
      color: #202020;
    }
    .tabs {
      width: auto;
      border-bottom: 1px solid #dcdcdc;
      text-transform: none;
      &__name {
        display: inline-block;
        padding: 0 1rem 1rem 1rem;
        border-bottom: 1px solid #202020;
        text-transform: none;
      }
    }
    .tab-content {
      padding-top: 2rem;
      margin-bottom: 1rem;
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 1.2rem;
      &__title {
        color: #A0A0A0;
      }
      &__text {
        color: #202020;
      }
    }
  }
}
</style>
