import {PostDTO} from '@/interfaces/dto/PostDTO';
import {UserDTO} from '@/interfaces/dto/UserDTO';

export interface PostWithUserDTO extends PostDTO {
    user: UserDTO;
}
