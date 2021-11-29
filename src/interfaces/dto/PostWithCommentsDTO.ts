import {PostDTO} from '@/interfaces/dto/PostDTO';
import {CommentDTO} from '@/interfaces/dto/CommentDTO';

export interface PostWithCommentsDTO extends PostDTO {
    comments: CommentDTO[];
}
