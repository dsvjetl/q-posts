<template>
    <div class="co-post-list" v-if="posts">
        <h1 class="title h--35 --bold">Posts</h1>
        <div
            class="post"
            v-for="post of posts"
            :key="post.id"
        >
            <a class="post__title h--22">{{post.title}}</a>
            <div class="comments" v-if="post.comments">
                <div
                    class="comment h--15"
                    v-for="comment of post.comments"
                    :key="comment.id"
                >
                    <span class="comment__email">{{comment.email}}: </span>
                    <span class="comment__body">{{comment.body}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';
    import {PostWithCommentsDTO} from '@/interfaces/dto/PostWithCommentsDTO';

    @Component({
        name: 'PostList',
    })
    export default class PostList extends Vue {
        @Prop() posts!: PostWithCommentsDTO[];
    }
</script>

<style lang="scss" scoped>
    .co-post-list {
        padding: 15px;
        border-radius: 10px;
        background-color: $grey-dark;
        margin: 30px auto;
        width: percentage(12 / 24);

        .title {
            color: #fff;
        }

        .post {
            margin: 10px 0;

            &:first-letter {
                text-transform: capitalize;
            }

            &__title {
                color: $green;
                transition: $trans-3s;
                cursor: pointer;

                &:hover {
                    background-color: $green;
                    color: $grey-dark;
                }
            }
        }

        .comments {
            padding-left: 15px;
        }

        .comment {
            padding-top: 10px;

            &__email {
                color: #fff;
            }

            &__body {
                color: $grey-light;
            }
        }
    }
</style>
