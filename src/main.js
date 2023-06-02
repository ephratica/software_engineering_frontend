import './assets/main.css'

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import materialKit from "./material-kit";
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(materialKit);

app.mount('#app')
