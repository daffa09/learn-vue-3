import { createApp } from 'vue'
import App from './App.vue'
import globalComponent from './components/globalComponent.vue'
import typeProps from './components/typesProps.vue'
import Satu from "./components/componentSatu.vue"

const app = createApp(App);
app.component('globalComponent', globalComponent);
app.component('typeProps', typeProps);
app.component('Satu', Satu);
app.mount('#app');