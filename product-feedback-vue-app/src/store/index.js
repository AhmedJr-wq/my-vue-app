import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        feedbackList: [],
        feedbackById: [],
        plannedRequestProducts: [],
        inProgressRequestProducts: [],
        liveRequestProducts: [],
        allRequestProducts: [],
    },
    mutations: {
        getFeedbackList(state, feedbackList) {
            state.feedbackList = feedbackList;
        },
        getFeedbackById(state, feedbackById) {
            state.feedbackById = feedbackById
        },
        getPlannedRequestProducts(state, plannedRequestProducts) {
            state.plannedRequestProducts = plannedRequestProducts;
        },
        getInProgressRequestProducts(state, inProgressRequestProducts) {
            state.inProgressRequestProducts = inProgressRequestProducts;
        },
        getLiveRequestProducts(state, liveRequestProducts) {
            state.liveRequestProducts = liveRequestProducts;
        },
        getAllRequestProducts(state, allRequestProducts) {
            state.allRequestProducts = allRequestProducts;
        }
    },
    getters: {
        getFeedbackList: (state) => state.feedbackList,
        getFeedbackById: (state) => state.feedbackById,
        getPlannedRequestProducts: (state) => state.plannedRequestProducts,
        getInProgressRequestProducts: (state) => state.inProgressRequestProducts,
        getLiveRequestProducts: (state) => state.liveRequestProducts,
        getAllRequestProducts: (state) => state.allRequestProducts
    },
    actions: {
        getFeedbackList({ commit, dispatch }) {
            // GET request to API endpoint that fetches feedback data
            axios.get('http://localhost:9000/feedback')
                .then((response) => {
                    commit('getFeedbackList', response.data);
                })
                .catch((error) => {
                    console.error('Error fetching feedback data:', error);
                });
                dispatch('productsData');
        },
        postFeedback({ commit }, feedback) {
            // POST request to API endpoint that adds feedback data
            axios.post('http://localhost:9000/feedback', feedback, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => {
                    commit('getFeedbackList', response.data);
                })
                .catch((error) => {
                    console.error('Error posting feedback data:', error);
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
        },
        productsData({ commit, state }) {
            // GET request to API endpoint that fetches products data
            axios.get('http://localhost:9000/feedback')
                .then((response) => {
                    commit('getAllRequestProducts', response.data);

                    let planned = [];
                    let inProgress = [];
                    let live = [];

                    state.allRequestProducts.forEach((item) => {
                        if (item.status?.toLowerCase() === 'planned') {
                            planned.push(item);
                        } else if (item.status?.toLowerCase() === 'in-progress') {
                            inProgress.push(item);
                        } else {
                            if(item.status?.toLowerCase() === 'live') {
                                live.push(item);
                            }
                        }
                    });

                    commit('getPlannedRequestProducts', planned);
                    commit('getInProgressRequestProducts', inProgress);
                    commit('getLiveRequestProducts', live);
                })
                .catch((error) => {
                    console.error('Error fetching products data:', error);
                });
        }

    },
});
