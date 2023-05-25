import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent";
import ExperienceComponent from "./components/ExperienceComponent";
import ContactComponent from "./components/ContactComponent";


const routes = [
    {
        path: "/",
        name: "HomeComponent",
        component: HomeComponent,
    },
    {
        path: "/experience", 
        component: ExperienceComponent,
    },
    {
        path: "/contact",
        name: "ContactComponent",
        component: ContactComponent,
    },
]

const router =  createRouter({
    history: createWebHistory(),
    routes,
});

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
