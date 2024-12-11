import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';
import RequestModule from './modules/requests/index.js';

const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: RequestModule
    },
    state() {
        return {
            userId: 'c3'
        }
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});


export default store;