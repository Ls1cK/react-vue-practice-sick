import { createApp } from "vue";
import "@/styles/index.less";
import App from "./App.vue";
// src/main.ts
import store from '@/store';
import router from '@/router';

const app = createApp(App);
app.use(store).use(router).mount('#app')
