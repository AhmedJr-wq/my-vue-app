import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        // feedbackType: 'Create New Feedback',
        feedbackList: [],
    },
    mutations: {
        getFeedbackList(state, feedbackList) {
            state.feedbackList = feedbackList;
        },
    },
    actions: {
        getFeedbackList({ commit }) {
            // Make a GET request to your API endpoint that fetches feedback data
            axios.get('http://localhost:9000/feedback')
                .then((response) => {
                    commit('getFeedbackList', response.data);
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching feedback data:', error);
                });
        },
    },
});
