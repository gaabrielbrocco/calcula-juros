/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { vMaska } from "maska";

const app = createApp(App)
app.directive("maska", vMaska);
registerPlugins(app)

app.mount('#app')
