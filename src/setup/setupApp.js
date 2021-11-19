import {createApp} from 'vue';

import {setupAntdIcon} from '@/setup/setupIcon';
import {setupAntdCmp} from '@/setup/setupAntdv';

import router from '@/router';
import store from '@/store';

export const setupApp = (App) => {
    const app = createApp(App);
    setupAntdIcon(app);
    setupAntdCmp(app);
    app.use(router).use(store);
    app.mount('#app');
};
