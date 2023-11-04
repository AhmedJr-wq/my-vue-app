import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Feedback from "../components/feedbacks/AddFeedback.vue";
import EditFeedback from "../components/feedbacks/FeedbackDetails.vue";


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
            component: Feedback,
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
});

export default router;
