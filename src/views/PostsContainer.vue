<template>
    <div class="co-posts-container">
        <p>Posts</p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component({
        name: 'PostsContainer',
    })
    export default class PostsContainer extends Vue {
        created() {
            this.$store.dispatch('getPosts');
        }
    }
</script>

<style lang="scss" scoped>
    .co-posts-container {
    }
</style>
