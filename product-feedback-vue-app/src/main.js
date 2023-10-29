import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BaseButton from "./components/UI/BaseButton.vue";
import Alert from "./components/UI/Alert.vue";
import NotificationAlert from "./components/UI/NotificationAlert.vue";
import Suggestions from "./components/feedbacks/Suggestions.vue";

const app = createApp(App)

app.component('base-button', BaseButton)
app.component('notification-alert', NotificationAlert)
app.component('alert', Alert)
app.component('suggestions', Suggestions)
app.mount('#app')
