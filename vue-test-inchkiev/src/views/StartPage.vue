<template>
  <section class="start-page">
    <div class="container">
      <div class="ellipse">
        <div class="ellipse__inner">
          <span class="ellipse__inner--descr">Добро пожаловать в игру</span>
          <div class="ellipse__inner--title">
            <h1>Помоги <span>Фармацевту</span></h1>
          </div>
        </div>
        <router-link class="header__logo" :to="{ name: 'main' }">
          <button class="ellipse__btn">Начать</button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StartPage',
  components: {},
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.start-page {
  width: 100vw;
  height: 100vh;
  background-image: url('./../assets/images/bg.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 0;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-color);
    opacity: 0.35;
    z-index: -1;
  }
}

.ellipse {
  margin: -30px 0 0 110px;
  width: 860px;
  height: 860px;
  border-radius: 50%;
  background: var(--gradient-color);
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.ellipse__inner {
  max-width: 55%;
}
.ellipse__inner--descr {
  font-size: 35px;
  line-height: 41px;
  font-weight: 300;
  letter-spacing: 2px;
}
.ellipse__inner--title {
  margin: 30px 0 0;
  letter-spacing: 5px;
  font-size: 60px;
  font-weight: 800;
  line-height: 66px;
  & h1 {
    font-size: 55px;
    font-weight: 800;
    & span {
      font-size: 60px;
      text-transform: uppercase;
    }
  }
}
.header__logo {
  margin: 120px 0 0 0;
}
.ellipse__btn {
  width: 380px;
  height: 90px;
  border-radius: var(--border-radius-big);
  border: 0 solid transparent;
  cursor: pointer;

  color: #8e9ad5;
  font-weight: 800;
  font-size: 36px;
}

@media screen and (max-width: 1025px) {
  .ellipse {
    width: 600px;
    height: 600px;
  }
  .ellipse__inner--descr {
    font-size: 24px;
    line-height: 20px;
    font-weight: 200;
    letter-spacing: 1px;
  }
  .ellipse__inner--title {
    margin: 30px 0 0;
    letter-spacing: 3px;
    line-height: 60px;
    & h1 {
      font-size: 40px;

      & span {
        font-size: 45px;
      }
    }
  }
  .header__logo {
    margin: 60px 0 0 0;
  }
  .ellipse__btn {
    width: 290px;
    height: 60px;
    font-size: 26px;
  }
}

@media screen and (max-width: 769px) {
  .ellipse {
    width: 450px;
    height: 450px;
    margin: -30px auto 0;
    text-align: center;
  }
  .ellipse__inner {
    max-width: 100%;
  }
}
</style>
