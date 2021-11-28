import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import PostsContainer from '@/views/PostsContainer.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'posts',
        component: PostsContainer,
    },
    // {
    //     path: '/',
    //     name: 'name',
    //     component: () => import('../views/[container-name].vue'),
    // },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
