import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import PrimeVue from 'primevue/config';
import Button from "primevue/button"
import Divider from "primevue/divider"
import InputText from "primevue/inputtext"

import 'primevue/resources/themes/saga-blue/theme.css'; // Cambia 'saga-blue' al tema que desees
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/*.vue', { eager: true })
    return pages[`./Pages/${name}.vue`]
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(PrimeVue)
      .component('Button', Button)
      .component('Divider', Divider)
      .component('InputText',InputText)
      .mount(el)
  },
})