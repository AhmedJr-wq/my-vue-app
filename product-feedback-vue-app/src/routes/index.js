import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import EditFeedback from "../components/feedbacks/FeedbackDetails.vue";
import AddFeedback from "../components/feedbacks/AddFeedback.vue";


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
            component: EditFeedback,
            props: true,
        },
        // {
        //     name: 'roadmap',
        //     path: '/roadmap',
        //     component: Roadmap
        // }
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
