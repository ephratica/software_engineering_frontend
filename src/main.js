import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp, VueElement } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import 'bootstrap/dist/css/bootstrap.css' //引用bootstrap的样式
import 'bootstrap/dist/js/bootstrap.min.js' //引用bootstrap的js

import materialKit from "./material-kit";

const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.use(materialKit);

app.mount('#app')
