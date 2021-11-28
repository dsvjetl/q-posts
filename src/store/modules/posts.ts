import {PostsState} from '@/interfaces/store/PostsState';
import {PostDTO} from '@/interfaces/dto/PostDTO';
import {axiosTypicode} from '@/axios/axiosTypicode';

export const state: PostsState = {
    posts: [],
};

export const getters = {
    posts: (state: PostsState): PostDTO[] => state.posts,
};

export const mutations = {
    setPosts(state: PostsState, posts: PostDTO[]) {
        state.posts = posts;
    },
};

export const actions = {
    async getPosts(context: any) {
        let posts: any = null;

        try {
            posts = await axiosTypicode.get('/posts');
        } catch (error) {
            return await Promise.reject(error);
        }

        context.commit('setPosts', posts.data);
    },
};

export const postsModule = {
    state,
    getters,
    mutations,
    actions,
};
