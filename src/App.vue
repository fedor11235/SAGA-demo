<template>
  <div class="wrapper-navbar">
    <div class="navbar">
      <img class="navbar__logo" src="@/assets/theidea_logo.svg" alt="The IDEA">
      <div class="navbar__links">
        <router-link to="/">Каталог</router-link>
        <router-link to="/">О компании</router-link>
        <router-link to="/">Где купить</router-link>
        <router-link to="/">Покупателям</router-link>
        <router-link to="/">Проекты</router-link>
        <router-link to="/">KULT by The IDEA</router-link>
      </div>
      <div class="navbar__menu">
        <div class="navbar__find">
          <img width="14" height="14" src="@/assets/find.svg" />
        </div>
        <div class="navbar__basket">
          <img width="14" height="14" src="@/assets/basket.svg" />
        </div>
      </div>
    </div>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  text-align: center;
}

.wrapper-navbar {
  .navbar {
    padding: 20px 16px;
    max-width: 1322px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    transition: 0.3s top ease;
    background-color: #f0f0f0;
    width: 100%;
  
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    &__logo {
      height: 1.25rem;
    }

    &__links {
      display: flex;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
      a {
        font-weight: bold;
        color: #2c3e50;
        display: block;
        padding: 0.5rem 1rem;
        text-decoration: none;
        transition: 0.3s color ease;
        color: rgba(32,32,32,.7);
        cursor: pointer;
        // &.router-link-exact-active {
        //   color: #42b983;
        // }
      }
    }
    &__menu {
      display: flex
    }
    &__find {
      display: flex;
      vertical-align: middle;
      background: #dcdcdc;
      padding: 0.5625rem 2.0625rem;
      line-height: 1;
      border-radius: 1rem;
      cursor: pointer;
    }
    &__basket {
      display: flex;
      vertical-align: middle;
      padding: 0.5625rem 2.0625rem;
      line-height: 1;
      border-radius: 1rem;
      cursor: pointer;
    }
  }
}
</style>
