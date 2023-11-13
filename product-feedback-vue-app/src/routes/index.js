import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import AddFeedback from "../pages/AddFeedback.vue";
import Roadmap from "../pages/Roadmap.vue";
import EditFeedback from "../pages/EditFeedback.vue";
import FeedbackDetails from "../pages/FeedbackDetails.vue";

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
