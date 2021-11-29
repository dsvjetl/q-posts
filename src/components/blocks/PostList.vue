<template>
    <div class="co-post-list" v-if="filteredPosts">
        <h1 class="co-post-list__title h--35 --bold">Posts</h1>
        <AppInput
            class="input"
            placeholder="Filter Posts"
            @onKeyup="inputKeyup($event)"
        />
        <div
            class="post"
            v-for="post of filteredPosts"
            :key="post.id"
        >
            <router-link
                class="post__title h--22"
                :to="{name: 'post', params: {id: post.id}}"
            >
                {{post.title}}
            </router-link>
            <div class="comments" v-if="post.comments">
                <div
                    class="comment h--15"
                    v-for="comment of post.comments"
                    :key="comment.id"
                >
                    <span class="comment__email">{{comment.email | getNameFromEmail}}: </span>
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
    import {getNameFromEmailFilter} from '@/filters/getNameFromEmailFilter';
    import AppInput from '@/components/elements/AppInput.vue';

    @Component({
        name: 'PostList',
        components: {AppInput},
        filters: {getNameFromEmailFilter},
    })
    export default class PostList extends Vue {
        @Prop() posts!: PostWithCommentsDTO[];

        filterTextParam = '';

        get filteredPosts(): PostWithCommentsDTO[] {
            if (!this.filterTextParam) {
                return this.posts;
            }

            return this.posts.filter((post) => {
                return post.title.toLowerCase()
                    .includes(this.filterTextParam.toLowerCase());
            });
        }

        inputKeyup(value: string) {
            this.filterTextParam = value;
        }
    }
</script>

<style lang="scss" scoped>
    .co-post-list {
        padding: 15px;
        border-radius: 10px;
        background-color: $grey-dark;
        margin: 30px auto;
        width: percentage(12 / 24);

        &__title {
            color: #fff;
            padding-bottom: 10px;
        }

        .input {
            margin-bottom: 10px;
            width: 50%;
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
                text-decoration: underline;

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
