import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BaseButton from "./components/UI/BaseButton.vue";
import Alert from "./components/UI/Alert.vue";
import NotificationAlert from "./components/UI/NotificationAlert.vue";

const app = createApp(App)

app.component('base-button', BaseButton)
app.component('notification-alert', NotificationAlert)
app.component('alert', Alert)
app.mount('#app')
