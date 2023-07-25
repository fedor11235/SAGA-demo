import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import './styles/main.scss'

const pinia = createPinia();

createApp(App).use(pinia).mount('#app')
