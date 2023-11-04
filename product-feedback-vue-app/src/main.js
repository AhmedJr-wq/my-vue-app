import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BaseButton from "./components/UI/BaseButton.vue";
import Alert from "./components/UI/Alert.vue";
import GoBackButton from "./components/UI/GoBackButton.vue";
import router from "./routes/index.js";
import store from "./store/index.js";
import SuggestionsTags from "./components/feedbacks/suggestions/SuggestionsTags.vue";


const app = createApp(App)

app.use(router)
app.use(store)

app.component('base-button', BaseButton)
app.component('alert', Alert)
app.component('back-button', GoBackButton)
app.component('suggestions-tags', SuggestionsTags)
app.mount('#app')
