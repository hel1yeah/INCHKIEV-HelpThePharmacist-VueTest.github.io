import { createStore } from 'vuex'

export default createStore({
  state: {
    patients: [
      {
        photo: require('./../assets/images/patient/1.jpg'),
        name: 'Валентина',
        id: 1,
        ege: 75,
        problem:
          'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тих, що дешевші!',
      },
      {
        photo: require('./../assets/images/patient/2.jpg'),
        name: 'Марія',
        id: 2,
        ege: 19,
        problem:
          'Бабуся приймає брендовий препарат від болю в суглобах, він допомагає, але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд.',
      },
      {
        photo: require('./../assets/images/patient/3.jpg'),
        name: 'Степан',
        id: 3,
        ege: 61,
        problem:
          ' Спросоння відсунув гарячий чайник рукою та обпікся. У Вас всі ліки від опіків такі дорогі? Можна хороший препарат недорого?',
      },
      {
        photo: require('./../assets/images/patient/4.jpg'),
        name: 'Любов',
        ege: 58,
        id: 4,
        problem:
          'Лікар призначив препарат від артеріальної гіпертензії, а бренд дорого коштує. Тому мені потрібен аналог з хорошою ефективністю та приємною ціною.',
      },
      {
        photo: require('./../assets/images/patient/5.jpg'),
        name: 'Олександр',
        id: 5,
        ege: 20,
        problem:
          'Порекомендуйте ефективний препарат від болю в горлі за розумну ціну.',
      },
      {
        photo: require('./../assets/images/patient/6.jpg'),
        name: 'Ірина',
        id: 6,
        ege: 55,
        problem:
          'У мене часто невралгії, лікар призначив вітаміни групи В. Мені потрібен якісний аналог за прийнятною ціною.',
      },
    ],
    isCurrentPatient: null,
    counterPatient: null,
    medicamentOne: null,
    medicamentTwo: null,
    medicamentThree: null,
  },
  mutations: {
    currentPatient(state) {
      state.counterPatient = state.counterPatient + 1
      state.isCurrentPatient = state.patients[state.counterPatient]
      console.log(state.isCurrentPatient)
      console.log(state.counterPatient)
    },
    changeMedicamentOne(state) {
      state.medicamentOne = state.medicamentOne + 1
    },
    changeMedicamentTwo(state) {
      state.medicamentTwo = state.medicamentTwo + 1
    },
    changeMedicamentThree(state) {
      state.medicamentThree = state.medicamentThree + 1
    },
  },
  actions: {
    nextPatient({ commit }, medicamentNumber) {
      commit('currentPatient')
      if (Number(medicamentNumber) === 1) {
        commit('changeMedicamentOne')
      } else if (Number(medicamentNumber) === 2) {
        commit('changeMedicamentTwo')
      } else {
        commit('changeMedicamentThree')
      }
    },
    test() {},
  },
  // modules: {},
  // модулей у нас нету
})
