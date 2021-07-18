<template>
  <section class="final-ease">
    <div class="final-ease__image-bg"></div>
    <div class="container">
      <button class="btn-restart">
        <img
          class="button-home__img"
          src="../assets/images/btn_restart.svg"
          alt="btn_restart"
        />
      </button>
      <div class="final-ease__inner">
        <div class="final-ease__interest">
          <div class="final-ease__interest--medicament">
            <span class="interest">100%</span>
            <span class="medicament">Препарат 1</span>
          </div>
          <div class="final-ease__interest--medicament">
            <span class="interest">100%</span>
            <span class="medicament">Препарат 1</span>
          </div>
          <div class="final-ease__interest--medicament">
            <span class="interest">100%</span>
            <span class="medicament">Препарат 1</span>
          </div>
        </div>
        <div class="final-ease__line"></div>
        <div class="final-ease--res">
          <h1>
            Ваш результат: <br />
            <span>«Что я здесь делаю?»</span>
          </h1>
          <p>
            Это тестовое задание, так что не будем углубляться в глубины проблем
            фармацевтов.
          </p>
        </div>
      </div>
      <button class="restart">Попробовать ещё раз</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FinalEasy',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.btn-restart {
  margin: 70px 0 0 50px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: var(--maine-bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s;
  outline: transparent;
  &:hover,
  &:active,
  &:focus,
  &:visited {
    transform: translateY(-20px);
    box-shadow: 0px 0px 40px rgba(127, 127, 127, 0.4);
  }
}
.final-ease {
  overflow: hidden;
  position: relative;
  width: 100%;
  color: var(--text-color-dark);
}
.final-ease__image-bg {
  position: absolute;
  overflow: hidden;
  top: -105px;
  right: -180px;
  width: 820px;
  height: 820px;
  border-radius: 50%;
  background-image: url('../assets/images/bg-final.jpg');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 80% cover;
  z-index: -1;
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-color);
    opacity: 0.25;
  }
}

.container {
}
.main__button {
}
.button-home__img {
}
.final-ease__inner {
  margin: 120px 0 0 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 580px;
}
.final-ease__interest {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
}
.final-ease__interest--medicament {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin: 0 15px;
}
.interest {
  font-size: 48px;
  line-height: 59px;
}
.medicament {
  font-size: 16px;
  line-height: 20px;
}
.final-ease__line {
  margin: 50px 0 0;
  border: 1px solid #d9d9d9;
  max-width: 580px;
}
.final-ease--res {
  padding: 40px 0 0;
  & h1 {
    color: var(--start-button-color);
    font-size: 32px;
    line-height: 35px;
    letter-spacing: 0.02em;
  }
  & span {
    font-weight: 800;
  }
  & p {
    font-size: 24px;
    line-height: 29px;
  }
}
.restart {
  background: var(--button-restart);
  color: var(--text-color);
  display: block;
  width: 280px;
  padding: 25px 0;
  margin: 250px 0 30px 130px ;
  text-align: center;
  border-radius: 100px;
  border: 1px solid transparent;
  outline: 1px solid transparent;
  cursor: pointer;
  transition: 0.5s;
  &:hover,
  &:active,
  &:focus,
  &:visited {
    transform: translateY(-20px);
    box-shadow: 0px 0px 40px rgba(127, 127, 127, 0.4);
  }
  &:disabled {
    transform: translateY(0px);
    opacity: 0.6;
  }
}
</style>
