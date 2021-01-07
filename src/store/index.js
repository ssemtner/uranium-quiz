import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const shuffle = require('shuffle-array')

export default new Vuex.Store({
    state: {
        score: 0,
        currentQuestion: 0,
        complete: false,
        questions: [
            {
                text: "What is the atomic symbol of Uranium",
                choices: [
                    "Ur",
                    "U",
                    "Un"
                ],
                answer: "U"
            },
            {
                text: "What is the atomic number of Uranium",
                choices: [
                    "103",
                    "87",
                    "92"
                ],
                answer: "92"
            },
            {
                text: "Which isotope of Uranium is the most common in nuclear reactors?",
                choices: [
                    "Uranium-232",
                    "Uranium-399",
                    "Uranium-235"
                ],
                answer: "Uranium-235"
            }
        ]
    },
    getters: {
        currentQuestion: state => state.currentQuestion,
        complete: state => state.complete,
        questions: state => state.questions,
        score: state => state.score
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
        },
        resetScore(state) {
            state.score = 0
        },
        addScore(state, amount) {
            state.score = state.score + amount
        },
        complete(state) {
            state.complete = true
        }
    },
    actions: {
        nextQuestion({commit}) {
            commit("nextQuestion")
        },
        randomize({commit}) {
            commit("randomizeQuestions")
            commit("randomizeChoices")
        },
        addScore({commit}, payload) {
            commit("addScore", payload)
        },
        complete({commit}) {
            commit("complete")
        }
    }
})
