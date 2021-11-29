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
    {
        path: '/post/:id',
        name: 'post',
        component: () => import('../views/PostContainer.vue'),
    },
    {
        path: '*',
        name: 'not-found',
        redirect: '/',
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
