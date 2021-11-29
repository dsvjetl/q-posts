<template>
    <div class="co-posts-container">
        <PostList :posts="postsWithComments"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import PostList from '@/components/blocks/PostList.vue';
    import {PostDTO} from '@/interfaces/dto/PostDTO';

    @Component({
        name: 'PostsContainer',
        components: {PostList},
    })
    export default class PostsContainer extends Vue {
        created() {
            this.$store.dispatch('getPostsWithComments');
        }

        get postsWithComments(): PostDTO[] {
            return this.$store.getters.postsWithComments;
        }
    }
</script>
