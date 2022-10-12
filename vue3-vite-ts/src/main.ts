import { createApp } from "vue";
import "./style.css";
import "@/styles/index.less";
import App from "./App.vue";
// src/main.ts
import store from '@/store';
import router from '@/router';

const app = createApp(App);
app.use(router)
app.use(store);
app.mount('#app');

createApp(App).mount("#app");
