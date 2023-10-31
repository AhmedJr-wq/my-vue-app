import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BaseButton from "./components/UI/BaseButton.vue";
import Alert from "./components/UI/Alert.vue";
import NotificationAlert from "./components/UI/NotificationAlert.vue";
import Feedback from "./components/feedbacks/Feedback.vue";
import {createRouter, createWebHistory} from "vue-router";
import MainComponent from "./components/MainComponent.vue";
import GoBackButton from "./components/UI/GoBackButton.vue";
import Suggestions from "./components/feedbacks/Suggestions.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MainComponent },
        {
            name: 'add-feedback',
            path: '/add-feedback',
            component:  Feedback
        },

    ]
})

const app = createApp(App)

app.use(router)

app.component('base-button', BaseButton)
app.component('notification-alert', NotificationAlert)
app.component('alert', Alert)
app.component('back-button', GoBackButton)
app.component('suggestion', Suggestions)
app.mount('#app')
