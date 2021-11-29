import {PostsState} from '@/interfaces/store/PostsState';
import {PostDTO} from '@/interfaces/dto/PostDTO';
import {axiosTypicode} from '@/axios/axiosTypicode';
import {PostWithCommentsDTO} from '@/interfaces/dto/PostWithCommentsDTO';
import {CommentDTO} from '@/interfaces/dto/CommentDTO';

export const state: PostsState = {
    posts: [],
    postsWithComments: [],
};

export const getters = {
    posts: (state: PostsState): PostDTO[] => state.posts,
    postsWithComments: (state: PostsState): PostWithCommentsDTO[] => state.postsWithComments,
};

export const mutations = {
    setPosts(state: PostsState, posts: PostDTO[]) {
        state.posts = posts;
    },
    setPostsWithComments(state: PostsState, comments: CommentDTO[]) {
        state.postsWithComments = state.posts.map((post) => {
            const postComment = comments.filter((comment) => (
                comment.postId === post.id ? comment : null
            ));
            return Object.assign(post, {...post, comments: postComment});
        });
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
    async getPostsWithComments(context: any) {
        await context.dispatch('getPosts');
        await context.dispatch('getComments');
        const comments = context.rootState.commentsModule.comments;
        context.commit('setPostsWithComments', comments);
    },
};

export const postsModule = {
    state,
    getters,
    mutations,
    actions,
};
