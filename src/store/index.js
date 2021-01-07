import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const shuffle = require('shuffle-array')

export default new Vuex.Store({
    state: {
        currentQuestion: 0,
        questions: [
            {
                text: "What is the atomic symbol of Uranium",
                choices: [
                    "Ur",
                    "U",
                    "Un"
                ],
                answer: "U"
            }
        ]
    },
    getters: {
        currentQuestion: state => state.currentQuestion,
        questions: state => state.questions
    },
    mutations: {
        nextQuestion(state) {
            state.currentQuestion++
        },
        randomizeQuestions(state) {
            state.questions = shuffle(state.questions)
        },
        randomizeChoices(state) {
            for (let i = 0; i < state.questions.length; i++) {
                state.questions[i].choices = shuffle(state.questions[i].choices)
            }
        }
    },
    actions: {
        nextQuestion({commit}) {
            commit("nextQuestion")
        },
        randomize({commit}) {
            commit("randomizeQuestions")
            commit("randomizeChoices")
        }
    }
})
