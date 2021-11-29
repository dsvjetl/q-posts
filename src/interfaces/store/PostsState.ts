import {PostDTO} from '@/interfaces/dto/PostDTO';
import {PostWithCommentsDTO} from '@/interfaces/dto/PostWithCommentsDTO';

export interface PostsState {
    posts: PostDTO[];
    postsWithComments: PostWithCommentsDTO[];
}
