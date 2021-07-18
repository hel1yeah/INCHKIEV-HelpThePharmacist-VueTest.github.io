<template>
  <div class="card" v-if="counterPatient < patients.length">
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
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'card',
  props: {
    patient: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {}
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
}
</script>

<style lang="scss" scoped>
.card {
  max-width: 540px;
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
  
}
</style>
