import Vue from 'vue';
import Vuex from 'vuex';
import {postsModule} from '@/store/modules/posts';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        postsModule,
    },
});
