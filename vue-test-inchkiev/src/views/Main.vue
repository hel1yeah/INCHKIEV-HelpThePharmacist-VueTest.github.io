<template>
  <section class="main">
    <div class="container">
      <div class="main__inner">
        <div class="main__menu--wrapper">
          <div class="main__menu">
            <div class="main__control-buttons">
              <button class="main__button">
                <img
                  class="button-home__img"
                  src="@/assets/images/home.svg"
                  alt="Home"
                />
              </button>
              <button class="main__button">
                <img
                  class="button-refresh__img"
                  src="@/assets/images/refresh.svg"
                  alt="Home"
                />
              </button>
            </div>
            <div class="main__param">
              <span class="main__param--text">Параметри:</span>
              <div class="main__param--inner">
                <div class="main__param--item">
                  <img
                    class="main__param--img"
                    src="@/assets/images/not_happy_icon.svg"
                    alt="happy_icon"
                  /><span>{{ medicamentOne || 0 }}</span>
                </div>
                <div class="main__param--item">
                  <img
                    class="main__param--img"
                    src="@/assets/images/happy_icon.svg"
                    alt="happy_icon"
                  /><span>{{ medicamentTwo || 0 }}</span>
                </div>
                <div class="main__param--item">
                  <img
                    class="main__param--img"
                    src="./../assets/images/heart_icon.svg"
                    alt="happy_icon"
                  /><span>{{ medicamentThree || 0 }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="main__queue">
            <span class="main__queue--descr">Осталось в очереди:</span>
            <div class="main__queue--num">
              <span>{{
                counterPatient === null
                  ? getCounterPatient
                  : patients.length - counterPatient
              }}</span
              >/{{ patients.length }}
            </div>
          </div>
        </div>

        <div class="main__work-space">
          <!-- <div class="main__work--inner"> -->

          <div class="card" v-if="counterPatient !== patients.length">
            <div class="card__img--wrapper">
              <img
                class="card__img"
                :src="
                  curentPatient === null
                    ? getFirstPatient.photo
                    : curentPatient.photo
                "
                alt="patient"
              />
            </div>

            <div class="card__descr">
              <h3 class="card__descr--title">
                {{
                  curentPatient === null
                    ? getFirstPatient.name
                    : curentPatient.name
                }},
                {{
                  curentPatient === null
                    ? getFirstPatient.ege
                    : curentPatient.ege
                }}
                років
              </h3>
              <p class="card__descr--par">
                {{
                  curentPatient === null
                    ? getFirstPatient.problem
                    : curentPatient.problem
                }}
              </p>
            </div>
          </div>
          <div class="blank__card" v-else>
            Поздоровляємо!!! Пацієнти потребуючі вашої допомоги, на даный
            момент, не залишилося, Можете відпочити Ви молодець!
          </div>
          <div class="card__control-buttons">
            <button
              :disabled="counterPatient === patients.length"
              class="card__control-button-1 card__control-button"
              @click="nextPatient(1)"
            >
              Препарат 1
            </button>
            <button
              :disabled="counterPatient === patients.length"
              class="card__control-button-2 card__control-button"
              @click="nextPatient(2)"
            >
              Препарат 2
            </button>
            <button
              :disabled="counterPatient === patients.length"
              class="card__control-button-3 card__control-button"
              @click="nextPatient(3)"
            >
              Препарат 3
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Main',
  data() {
    return {}
  },
  methods: {
    nextPatient(medicamentNumber) {
      this.$store.dispatch('nextPatient', medicamentNumber)
    },
  },
  computed: {
    ...mapState({
      curentPatient: 'isCurrentPatient',
      counterPatient: 'counterPatient',
      patients: 'patients',
      medicamentOne: 'medicamentOne',
      medicamentTwo: 'medicamentTwo',
      medicamentThree: 'medicamentThree',
    }),
    getFirstPatient() {
      // console.log(this.$store.state.patients[0])
      return this.$store.state.patients[0]
    },
    getCounterPatient() {
      // console.log(this.$store.state.patients[0])
      return this.$store.state.patients.length - 1
    },
  },
  maunted: {
    test() {
      this.$store.dispatch('tets')
    },
  },
}
</script>

<style lang="scss" scoped>
.main {
}
.main__inner {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-self: stretch;
  justify-content: center;
  align-items: stretch;
  height: 100vh;
}
.main__menu--wrapper {
  flex-shrink: 2;
  z-index: 0;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-between;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: var(--gradient-color);
    opacity: 0.7;
    z-index: -1;
  }
}
.main__menu {
  padding: 70px 30px 0;
}
.main__work-space {
  background-color: var(--maine-bg-color);
  flex-grow: 1;
  flex-shrink: 3;
  border-right: 5px solid black;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}
.main__control-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 180px;
}
.main__button {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: var(--maine-bg-color);
  border: 0px solid transparent;
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
.button-home__img {
}

.button-refresh__img {
}

.main__param {
  margin: 290px 0 0 0;
}
.main__param--text {
  font-size: 36px;
  line-height: 44px;
  font-weight: 800;
  letter-spacing: 2px;
}
.main__param--inner {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  max-width: 400px;
}
.main__param--item {
  margin: 35px 0 0;
  min-width: 190px;
  height: 80px;
  background-color: var(--maine-bg-color);
  box-shadow: 0px 0px 50px rgba(131, 42, 64, 0.4);
  border-radius: 40px;
  padding: 10px;
  color: var(--text-color-dark);
  font-size: 48px;
  line-height: 59px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;

  & img {
    margin: 0 20px 0 0;
  }

  & span {
    margin: 0 20px 0 0;
    font-weight: 800;
  }
}
.main__queue {
  font-size: 36px;
  line-height: 44px;
  font-weight: 300;
  text-align: center;
  padding: 30px 60px;
  background-color: rgba(255, 255, 255, 0.15);
}
.main__queue--descr {
}
.main__queue--num {
  & span {
    font-weight: bold;
  }
}
// .main__work--inner {
//   padding: 130px 0 65px;
//   display: flex;
//   flex-wrap: nowrap;
//   flex-direction: column;
//   justify-content: space-between;
// }
.card {
  max-width: 540px;
  min-height: 590px;
  border-radius: 40px;
  box-shadow: 0px 0px 40px rgba(127, 127, 127, 0.4);
  overflow: hidden;
}
.blank__card {
  width: 540px;
  height: 590px;
  border-radius: 40px;
  background: var(--gradient-color);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px 40px;
  letter-spacing: 1px;
  line-height: 30px;
}
.card__img--wrapper {
  position: relative;
  z-index: 0;
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-color);
    opacity: 0.2;
    z-index: 1;
  }
}
.card__img {
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-color);
    // opacity: 0.2;
    z-index: 1;
  }
}
.card__descr {
  text-align: left;
  max-width: 420px;
  margin: 25px 60px 80px;
  line-height: 39px;
}
.card__descr--title {
  color: var(--start-button-color);
  font-weight: 800;
  font-size: 36px;
  line-height: 39px;
  margin: 0 0 0 0;
}
.card__descr--par {
  color: var(--text-color-dark);
  font-weight: 300;
  font-size: 32px;
  line-height: 30px;
  margin: 10px 0 0 0;
}
.card__control-buttons {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
.card__control-button {
  display: block;
  width: 280px;
  padding: 25px 0;
  margin: 20px;
  text-align: center;
  border-radius: 100px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.5s;
  outline: 1px solid transparent;
  &:hover,
  &:active,
  &:visited {
    transform: translateY(-20px);
    box-shadow: 0px 0px 40px rgba(127, 127, 127, 0.4);
  }
}
.card__control-button-1 {
  background: var(--button-color-prep-1);
}
.card__control-button-2 {
  background: var(--button-color-prep-2);
}
.card__control-button-3 {
  background: var(--button-color-prep-3);
}
</style>
