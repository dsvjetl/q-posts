import {axiosTypicode} from '@/axios/axiosTypicode';
import {CommentsState} from '@/interfaces/store/CommentsState';
import {CommentDTO} from '@/interfaces/dto/CommentDTO';

export const state: CommentsState = {
    comments: [],
};

export const getters = {
    comments: (state: CommentsState): CommentDTO[] => state.comments,
};

export const mutations = {
    setComments(state: CommentsState, comments: CommentDTO[]) {
        state.comments = comments;
    },
};

export const actions = {
    async getComments(context: any) {
        let posts: any = null;

        try {
            posts = await axiosTypicode.get('/comments');
        } catch (error) {
            return await Promise.reject(error);
        }

        context.commit('setComments', posts.data);
    },
};

export const commentsModule = {
    state,
    getters,
    mutations,
    actions,
};
