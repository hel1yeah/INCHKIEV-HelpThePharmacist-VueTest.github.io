<template>
  <button
    :disabled="counterPatient >= patients.length"
    class="card__control-button"
    :class="btnClass"
    @click="$emit('action')"
  >
    <slot>ошибка кнопки</slot>
  </button>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ButtonCardControl',
  emits: {
    action: {
      type: Function,
      require: true,
    },
  },
  props: {
    btnClass: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'purple', 'blue', 'yellow'].includes(value)
      },
    },
  },
  computed: {
    ...mapState({
      counterPatient: 'counterPatient',
      patients: 'patients',
      queue: 'queue',
    }),
  },
}
</script>

<style lang="scss" scoped>
.purple {
  background: var(--button-purple);
}
.blue {
  background: var(--button-blue);
}
.yellow {
  background: var(--button-yellow);
}
.card__control-button {
  color: var(--text-color);
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
  &:disabled {
    transform: translateY(0px);
    opacity: 0.6;
  }
}
</style>
