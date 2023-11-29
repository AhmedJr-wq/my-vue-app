import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import AddFeedback from "../pages/AddFeedback.vue";
import Roadmap from "../pages/Roadmap.vue";
import EditFeedback from "../pages/EditFeedback.vue";
import FeedbackDetails from "../pages/FeedbackDetails.vue";
import {useStore} from "vuex";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            name: 'add-feedback',
            path: '/add-feedback',
            component: AddFeedback,
            beforeEnter: async (to, from, next) => {
                const store = useStore()
                await store.dispatch('clearFeedbackItems')
                next()
            },
        },
        {
            name: 'feedback-detail',
            path: '/feedback-detail/:id',
            component: FeedbackDetails,
            props: true,
        },
        {
            name: 'roadmap',
            path: '/roadmap',
            component: Roadmap
        },
        {
            name: 'edit-feedback',
            path: '/edit-feedback/:id',
            component: EditFeedback,
            beforeEnter: async (to, from, next) => {
                const store = useStore()
                await store.dispatch('getFeedbackById', to.params.id)
                next()
            },
            props: true
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0, left: 0 };
        }
    }
});

export default router;
