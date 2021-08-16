<template>
  <div class="card" v-if="counterPatient < patients.length">
    <div
      class="card-label"
      :class="[
        cardLabel === 1 ? 'left-card' : '',
        cardLabel === 2 ? 'up-card' : '',
        cardLabel === 3 ? 'right-card' : '',
      ]"
    ></div>
    <div class="card__img--wrapper">
      <img
        class="card__img"
        :src="
          isCurrentPatient === null
            ? getFirstPatient.photo
            : isCurrentPatient.photo
        "
        alt="patient"
      />
    </div>

    <div class="card__descr">
      <h3 class="card__descr--title">
        {{
          isCurrentPatient === null
            ? getFirstPatient.name
            : isCurrentPatient.name
        }},
        {{
          isCurrentPatient === null ? getFirstPatient.ege : isCurrentPatient.ege
        }}
        років
      </h3>
      <p class="card__descr--par">
        {{
          isCurrentPatient === null
            ? getFirstPatient.problem
            : isCurrentPatient.problem
        }}
      </p>
    </div>
  </div>
  <div class="blank__card" v-else>
    Поздоровляємо!!! Пацієнтів що потребуюсть вашої допомоги, на даный момент,
    не залишилося, Можете відпочити, Ви молодець!
  </div>
</template>

<script>
// import * as Hammer from 'hammerjs'

// window.Hammer = Hammer.default

import { mapState, mapGetters } from 'vuex'
export default {
  name: 'card',
  emits: ['resetCardlable'],
  props: ['cardLabel'],
  data() {
    return {}
  },
  methods: {
    showLableCard() {
      console.log(this.cardLabel)
      setTimeout(() => {
        this.$emit('resetCardlable')
      }, 1000)
    },
    // startHammer() {
    //   const card = document.getElementsByClassName('card')[0]
    //   const cardLabel = document.getElementsByClassName('card-label')[0]
    //   let mc = new Hammer.Manager(card)
    //   let Pan = new Hammer.Pan()
    //   mc.add(Pan)
    //   mc.get('pan').set({ direction: Hammer.DIRECTION_ALL })
    //   mc.on(
    //     'panleft swipeleft panright swiperight panup swipeup pandown swipedown press pressup',
    //     function (ev) {
    //       const X = ev.deltaX
    //       const Y = ev.deltaY
    //       card.style.transform = `
    //         translate(${X}px, ${Y}px)
    //         rotate(${ev.deltaX / 10}deg
    //         `
    //       console.log(Math.abs(Y))
    //       console.log('x:', X, 'y:', Y)
    //       if (X < -50 && X < Y) {
    //         cardLabel.classList.remove('right-card')
    //         cardLabel.classList.remove('up-card')
    //         cardLabel.classList.add('left-card')
    //       } else if (Y < -50 && Y < X) {
    //         cardLabel.classList.remove('right-card')
    //         cardLabel.classList.remove('left-card')
    //         cardLabel.classList.add('up-card')
    //       } else if (50 < X && X > Math.abs(Y)) {
    //         cardLabel.classList.remove('left-card')
    //         cardLabel.classList.remove('up-card')
    //         cardLabel.classList.add('right-card')
    //       } else if (Y > 20) {
    //         cardLabel.classList.remove('left-card')
    //         cardLabel.classList.remove('up-card')
    //         cardLabel.classList.remove('right-card')
    //       }
    //     },
    //   )
    // },
  },
  computed: {
    ...mapState({
      isCurrentPatient: 'isCurrentPatient',
      counterPatient: 'counterPatient',
      queue: 'queue',
      patients: 'patients',
    }),
    ...mapGetters(['getFirstPatient']),
  },
  mounted() {
    this.showLableCard()
  },
}
</script>

<style lang="scss" scoped>
.card {
  width: 540px;
  min-height: 420px;
  border-radius: 40px;
  box-shadow: 0 0 40px rgba(127, 127, 127, 0.4);
  overflow: hidden;
  position: relative;
  background: var(--maine-bg-color);
}
.card-label {
  z-index: 10;
  width: 350px;
  height: 120px;
  position: absolute;
  bottom: 30%;
  left: 20%;
  transform: rotate(10deg);
}
.left-card {
  background: url('./../assets/images/prep1.svg');
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}
.up-card {
  background: url('./../assets/images/prep2.svg');
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}
.right-card {
  background: url('./../assets/images/prep3.svg');
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
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

@media screen and (max-width: 1367px) {
  .card {
    max-width: 370px;
  }
  .card__descr {
    text-align: left;
    max-width: 420px;
    margin: 15px 25px 25px;
  }
  .card__descr--title {
    font-size: 30px;
    line-height: 30px;
  }
  .card__descr--par {
    font-size: 25px;
    line-height: 25px;
  }
  .blank__card {
    max-width: 370px;
    max-height: 400px;
    border-radius: 40px;
    padding: 30px 40px;
    letter-spacing: 1px;
    line-height: 30px;
  }
}
</style>
