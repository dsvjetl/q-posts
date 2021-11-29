import {PostDTO} from '@/interfaces/dto/PostDTO';
import {PostWithCommentsDTO} from '@/interfaces/dto/PostWithCommentsDTO';
import {PostWithUserDTO} from '@/interfaces/dto/PostWithUserDTO';

export interface PostsState {
    posts: PostDTO[];
    postsWithComments: PostWithCommentsDTO[];
    singlePost: PostDTO | null;
    postWithUser: PostWithUserDTO | null;
}
