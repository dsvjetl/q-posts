import {axiosTypicode} from '@/axios/axiosTypicode';
import {UsersState} from '@/interfaces/store/UsersState';
import {UserDTO} from '@/interfaces/dto/UserDTO';

export const state: UsersState = {
    user: null,
};

export const getters = {
    user: (state: UsersState): UserDTO | null => state.user,
};

export const mutations = {
    setUser(state: UsersState, user: UserDTO) {
        state.user = user;
    },
};

export const actions = {
    async getUser(context: any, id: string) {
        let user: any;

        try {
            user = await axiosTypicode.get(`/users/${id}`);
        } catch (error) {
            return await Promise.reject(error);
        }

        context.commit('setUser', user.data);
    },
};

export const usersModule = {
    state,
    getters,
    mutations,
    actions,
};
