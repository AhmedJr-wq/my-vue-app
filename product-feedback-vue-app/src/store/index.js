import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        // feedbackType: 'Create New Feedback',
        feedbackList: [],
        feedbackById: []
    },
    mutations: {
        getFeedbackList(state, feedbackList) {
            state.feedbackList = feedbackList;
        },
        getFeedbackById(state, feedbackById) {
            state.feedbackById = feedbackById
        }
    },
    actions: {
        getFeedbackList({ commit }) {
            // GET request to API endpoint that fetches feedback data
            axios.get('http://localhost:9000/feedback')
                .then((response) => {
                    commit('getFeedbackList', response.data);
                })
                .catch((error) => {
                    console.error('Error fetching feedback data:', error);
                });
        },

        getFeedbackById({ commit }, id) {
            // GET request to API endpoint that fetches feedback data by id
            axios.get(`http://localhost:9000/feedback/${id}`)
                .then((response) => {
                    commit('getFeedbackById', response.data);
                })
                .catch((error) => {
                    console.error('Error fetching feedback data:', error);
                });
        }
    },
});
