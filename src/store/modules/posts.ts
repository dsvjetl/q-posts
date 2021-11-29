import {PostsState} from '@/interfaces/store/PostsState';
import {PostDTO} from '@/interfaces/dto/PostDTO';
import {axiosTypicode} from '@/axios/axiosTypicode';
import {PostWithCommentsDTO} from '@/interfaces/dto/PostWithCommentsDTO';
import {CommentDTO} from '@/interfaces/dto/CommentDTO';
import {PostWithUserDTO} from '@/interfaces/dto/PostWithUserDTO';
import {UserDTO} from '@/interfaces/dto/UserDTO';

export const state: PostsState = {
    posts: [],
    postsWithComments: [],
    singlePost: null,
    postWithUser: null,
};

export const getters = {
    posts: (state: PostsState): PostDTO[] => state.posts,
    postsWithComments: (state: PostsState): PostWithCommentsDTO[] => state.postsWithComments,
    singlePost: (state: PostsState): PostDTO | null => state.singlePost,
    postWithUser: (state: PostsState): PostWithUserDTO | null => state.postWithUser,
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
    setSinglePost(state: PostsState, post: PostDTO) {
        state.singlePost = post;
    },
    setPostWithUser(state: PostsState, user: UserDTO) {
        const post = state.singlePost;
        state.postWithUser = Object.assign(post, {user});
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
    async getSinglePost(context: any, id: string) {
        let post: any = null;

        try {
            post = await axiosTypicode.get(`/posts/${id}`);
        } catch (error) {
            return await Promise.reject(error);
        }

        context.commit('setSinglePost', post.data);
    },
    async getPostWithUser(context: any, id: string) {
        await context.dispatch('getSinglePost', id);
        const userId = context.getters.singlePost.userId;
        await context.dispatch('getUser', userId);
        const user = context.rootState.usersModule.user;
        context.commit('setPostWithUser', user);
    },
};

export const postsModule = {
    state,
    getters,
    mutations,
    actions,
};
