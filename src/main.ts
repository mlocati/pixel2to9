import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopy, faFloppyDisk, faFolderOpen, faPaste } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCopy, faFloppyDisk, faFolderOpen, faPaste);
createApp(App)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
;
