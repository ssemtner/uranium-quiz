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
                text: "What type of element is Uranium?",
                choices: [
                    "Metal",
                    "Nonmetal",
                    "Metalloid"
                ],
                answer: "Metal"
            },
            {
                text: "Who discovered Uranium?",
                choices: [
                    "Marie Curie",
                    "Enrico Fermi",
                    "Martin Heinrich Klaproth"
                ],
                answer: "Martin Heinrich Klaproth"
            },
            {
                text: "What is the atomic mass of uranium",
                choices: [
                    "238.02891",
                    "128.39203",
                    "532.23903"
                ],
                answer: "238.02891"
            },
            {
                text: "Which isotope of Uranium is the most common in nuclear reactors?",
                choices: [
                    "Uranium-232",
                    "Uranium-399",
                    "Uranium-235"
                ],
                answer: "Uranium-235"
            },
            {
                text: "What is Uranium not used for?",
                choices: [
                    "Coloring glass",
                    "Powering submarines",
                    "MOAB bomb"
                ],
                answer: "MOAB bomb"
            },
            {
                text: "What was Uranium named after?",
                choices: [
                    "A dog",
                    "A planet",
                    "A friend"
                ],
                answer: "A planet"
            }
        ]
    },
    getters: {
        currentQuestion: state => state.currentQuestion,
        complete: state => state.complete,
        questions: state => state.questions,
        count: state => state.questions.length,
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
        reset(state) {
            state.score = 0
            state.currentQuestion = 0
            state.complete = false
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
        },
        reset({commit}) {
            commit("reset")
        }
    }
})
